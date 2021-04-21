import axios from 'axios'

class BeerRecipe {
    static all = () => {
        return axios.get(`${process.env.PORT}/api/recipes`)
    }

    static show = (beerRecipeId) => {
        return axios.get(`${process.env.PORT}/api/recipes/${beerRecipeId}`)
    }

    static create = (beerRecipeFormData) => {
        return axios.post(`${process.env.PORT}api/recipes`, beerRecipeFormData)
    }
}

export default BeerRecipe;