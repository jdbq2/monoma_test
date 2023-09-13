import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { Circles } from "react-loader-spinner";
import { useLoginUserMutation } from "../app/services/authAPI";
import { LoginData } from "../../types/types";
import {
    Form,
    InputLabel,
    InputWrapper,
    LoginInputForm,
    ShowPWButton,
    SubmitButton,
    ErrorMessage,
} from "../styles/components/Forms";

const LoginForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginData>({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onBlur",
    });

    const [loginUser, { error, isLoading, isError, isSuccess }] =
        useLoginUserMutation();

    const onSubmit: SubmitHandler<LoginData> = (data) => {
        loginUser(data);
    };

    if (isLoading) {
        return (
            <Circles
                height="80"
                width="80"
                color="#2563eb"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        );
    }

    if (isSuccess) {
        toast.success("🦄Bienvenido!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    if (isError) {
        //@ts-ignore
        toast.error(`${error.data.error}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
                <InputLabel htmlFor="email">Email</InputLabel>
                <LoginInputForm
                    {...register("email", {
                        required: "Este Campo es obligatorio",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
                    })}
                    type="text"
                    id="email"
                />
                {errors?.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
            </InputWrapper>
            <InputWrapper>
                <InputLabel htmlFor="password">Contraseña</InputLabel>
                <LoginInputForm
                    {...register("password", {
                        required: "Este Campo es obligatorio",
                        minLength: {
                            value: 8,
                            message:
                                "La contraseña debe tener mínimo 8 caracteres y maximo 12 caracteres",
                        },
                        maxLength: {
                            value: 12,
                            message:
                                "La contraseña debe tener mínimo 8 caracteres y maximo 12 caracteres",
                        },
                    })}
                    type={showPassword ? "text" : "password"}
                    id="password"
                />
                {errors?.password && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
                <ShowPWButton
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? "Ocultar" : "Mostrar"}
                </ShowPWButton>
            </InputWrapper>
            <InputWrapper>
                <SubmitButton>Iniciar sesión</SubmitButton>
            </InputWrapper>
        </Form>
    );
};

export default LoginForm;
