// one way data binding

const inputOne = document.getElementById('input-one')
const contentOne = document.getElementById('content-one')

const store = {
  state: {
    inputContent: ''
  },
  setState (newState) {
    this.state = {
      ...this.state,
      ...newState
    }
    this.listeners.forEach((l) => l())
  },
  listeners: []
}

inputOne.addEventListener('input', (evt) => {
  const inputContent = evt.target.value
  store.setState({inputContent})
})

store.listeners.push(() => {
  contentOne.innerHTML = store.state.inputContent
  inputOne.value = store.state.inputContent
})

// changing state async
setTimeout(() => {
  store.setState({inputContent: 'hello'})
})

// two way data binding

const inputTwo = document.getElementById('input-two')
const contentTwo = document.getElementById('content-two')

const state = {
  __inputContent: '',
  get inputContent () {
    return this.__inputContent
  },
  set inputContent (content) {
    this.__inputContent = content
    contentTwo.innerHTML = content
    inputTwo.value = content
  }
}

inputTwo.addEventListener('input', (evt) => {
  const inputContent = evt.target.value
  state.inputContent = inputContent
})

// changing state async
setTimeout(() => {
  state.inputContent = 'goodbye'
})
