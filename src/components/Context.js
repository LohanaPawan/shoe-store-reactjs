import React, { Component } from 'react'

export const dataContext = React.createContext()

export class DataProvider extends Component {
    state = {
        products : [
            {
                "_id": "1",
                "title": "Nike Shoes 01",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike Shoes 06",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Nike Shoes 06",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Nike Shoes 06",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ]
    }
    render() {
        const {products} = this.state
        return (
           <dataContext.Provider value={{products}}>
                {this.props.children}
           </dataContext.Provider>
        )
    }
}
