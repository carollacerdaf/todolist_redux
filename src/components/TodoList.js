import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'
import { toggleTodo, setEditingTodo } from '../actions'

const TodoList = ({ todos, dispatchToggleTodo, dispatchSetEditingTodo }) => {
    return (
        <View>
            {todos.map(todo => <TodoListItem
                key={todo.id}
                todo={todo}
                onPressTodo={() => dispatchToggleTodo(todo.id)}
                onLongPressTodo={() => dispatchSetEditingTodo(todo)}
            />
            )}
        </View>
    )
}

const styles = StyleSheet.create({

})

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(mapStateToProps, {
    dispatchToggleTodo: toggleTodo,
    dispatchSetEditingTodo: setEditingTodo
})
    (TodoList);