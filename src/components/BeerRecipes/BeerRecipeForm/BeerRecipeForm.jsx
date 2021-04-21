import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { multiselect } from 'multiselect-react-dropdown'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import BeerRecipe from '../../../models/BeerRecipe'

const BeerRecipeForm = () => {
    const [recipeName, setRecipeName] = useState('')
    // const [img, setImg] = useState('')
    const [caption, setCaption] = useState('')
    // const history = useHistory();
    const [validated, setValidated] = useState(false);

    // useEffect(() => {
    //     history.pushState('/recipes')
    // })

    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        const beerRecipeFormData = { recipeName, caption }

        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }

        try {
            await BeerRecipe.create(beerRecipeFormData)
            setValidated(true)
            console.log(beerRecipeFormData)
        } catch (error) {
            console.log(error, 'Error posting recipe:', beerRecipeFormData)
        }
    }

    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
            <Form.Group md="4" controlId="input1">
                <Form.Label>Recipe Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Recipe Name"
                        defaultValue="Awesome Cream Ale"
                        onchange={(e) => setRecipeName(e.target.value)}
                    />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="input2">
                <Form.Label>Caption</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Caption"
                        defaultValue="great beer"
                        onchange={(e) => setCaption(e.taget.value)}
                    />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
        
        <Button variant="primary" type="submit" onClick={(event) => (window.location.href = '/recipes')}>
            Post Recipe
        </Button>
        <Link to="/recipes" className="btn btn-secondary cncl-btn">
            Cancel
        </Link>
        </Form>
    )
}

export default BeerRecipeForm


