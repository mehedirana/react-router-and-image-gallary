import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateArticle } from '../store/articles/articlesAction'


export default function About() {
    
    const updateArticle = useSelector((e)=> e.updateArticle)
    const dispatch = useDispatch()
    return (
        <div>
        <h1>About page</h1>
        
        </div>
    )
}
