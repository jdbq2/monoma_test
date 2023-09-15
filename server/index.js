import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("./server/db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3005;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    setTimeout(next, 3000);
});

// Ruta para el inicio de sesión
server.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const users = await router.db.get("users").value();
        const user = users.find(
            (u) => u.email === email && u.password === password
        );
        if (user) {
            res.status(200).json({ message: "Inicio de sesión exitoso", user });
        } else {
            res.status(401).json({ error: "Credenciales incorrectas" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error interno en el servidor",
        });
    }
});

server.use(router);

server.listen(PORT, () => {
    console.log(`JSON Server corriendo en el puerto ${PORT}`);
});
