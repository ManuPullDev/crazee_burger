import { useState } from 'react'

const LoginForm = () => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        alert(`Bonjour ${input}`)
        e.preventDefault();
        setInput("")
    };

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h2>Bienvenue  chez nous</h2>
            <p>Connectez-vous</p>
            <input
                type="text"
                placeholder='Entrez votre prenom'
                required
                value={input}
                onChange={handleChange}
            />
            <button>Acceder a votre espace</button>
        </form>
    )
}

export default LoginForm