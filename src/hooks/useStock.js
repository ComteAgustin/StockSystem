// Import dependencies
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles, deleteArticle } from 'redux/articlesDuck'

// Hooks
export default () => {

    // Init redux hook
    const dispatch = useDispatch()

    // Get stock from api
    useEffect(() => {
        dispatch(getArticles())
    }, [])

    // Saving stock in a const
    const stock = useSelector(store => store.articles.articles)

    // Function for delete article
    const delArticle = id => {
        dispatch(deleteArticle(id))
    }

    // Function for check if there are stock or not
    const checkStock = () => {
        for (let i = 0; i < stock.length; i++) {
            if (stock[i].stock != 0) {
                return true
            }
        }
        return false
    }

    // Return
    return {
        stock,
        checkStock,
        delArticle
    }
}