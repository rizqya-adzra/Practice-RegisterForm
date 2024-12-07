import React from "react";
import { createRoot } from "react-dom/client";

class MyForm extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    <form action="">
                        <label htmlFor="name"></label>
                        <input id="name" type="text" />
                        <br />
                        <label htmlFor="email"></label>
                        <input id="email" type="text" />
                        <br />
                        <label htmlFor="gender">Gender: </label>
                        <select id="gender">
                            <option value="Man">Man</option>
                            <option value="Woman">Woman</option>
                        </select>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </h1>
            </div>
        )
    }
}

const root = createRoot(document.getElementById('root'))
root.render(<MyForm />)