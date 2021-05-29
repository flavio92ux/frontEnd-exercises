const btnSomar = document.querySelector('#increment');
const btnSubtrair = document.querySelector('#decrement');
const btnAdd10 = document.querySelector('#add10');

btnAdd10.addEventListener('click', () => {
  store.dispatch ({
    type: 'INCREMENT',
    payload: {
      amount: 10,
    }
  })
});


btnSubtrair.addEventListener('click', () => {
  const subtrairContent = document.querySelector('#subtrair').value;
  const decrementAction = {
    type: 'DECREMENT',
    payload: {
      amount: (subtrairContent ? parseInt(subtrairContent) : 0),
    }
  }
  store.dispatch(decrementAction);
});

btnSomar.addEventListener('click', () => {
  const somarContent = document.querySelector('#somar').value;
  const incrementAction = {
    type: 'INCREMENT',
    payload: {
      amount: (somarContent ? parseInt(somarContent) : 0),
    }
  }
  store.dispatch(incrementAction);
});


const store = Redux.createStore(counterReducer);

function counterReducer(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + action.payload.amount;
    case 'DECREMENT':
      return state - action.payload.amount;
  }
}

store.subscribe(() => {
  document.querySelector('#value').innerHTML = store.getState();
});

