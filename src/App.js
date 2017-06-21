import React from 'react'
import { connect } from 'react-redux'
import { updateText, addTodo } from './actions/TodoActions'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { onSubmit, onChange, text } = this.props
        onSubmit(text)
        onChange('')
    }

    render() {
        const { onChange, text, todoList } = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={({ target })=> onChange(target.value)} value={text}/>
                </form>
                <div>
                    {todoList.map((item, index)=> (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return ({
        text: store.todo.text,
        todoList: store.todo.todoList
    })
}

const mapDispatchToProps = {
    onChange: updateText,
    onSubmit: addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App)