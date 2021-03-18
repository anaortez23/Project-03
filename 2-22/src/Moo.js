import React, { Component } from 'react'



export function Cow({ name, age }) {
    return (
        <h4>
            🐮 {name} {age}
        </h4>
    )
}

export function Pig({ name, age }) {
    return (
        <h4>
            🐷 {name} {age}
        </h4>
    )
}