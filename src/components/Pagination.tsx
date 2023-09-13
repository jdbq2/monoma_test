import { FC } from "react";
import { HeaderTitle } from "../styles/components/Fonts";
import {
    PaginationButton,
    PaginationWrapper,
} from "../styles/components/Pagination";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface Props {
    isBackDisabled: boolean;
    isFrontDisabled: boolean;
    totalPages: number;
    currentPage: number;
    handleBack: () => void;
    handleAdvance: () => void;
}

const Pagination: FC<Props> = ({
    isBackDisabled,
    isFrontDisabled,
    handleBack,
    handleAdvance,
    totalPages,
    currentPage,
}) => {
    return (
        <PaginationWrapper>
            <PaginationButton onClick={handleBack} disabled={isBackDisabled}>
                <MdChevronLeft color={"white"} style={{ fontSize: "1.5rem" }} />
            </PaginationButton>
            <HeaderTitle>
                {currentPage}/{totalPages}
            </HeaderTitle>
            <PaginationButton
                onClick={handleAdvance}
                disabled={isFrontDisabled}
            >
                <MdChevronRight
                    color={"white"}
                    style={{ fontSize: "1.5rem" }}
                />
            </PaginationButton>
        </PaginationWrapper>
    );
};

export default Pagination;
