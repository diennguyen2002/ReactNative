const defaultWords = [
  {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 4, en: 'Four', vn: 'Bon', isMemorized: false},
  {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
];

function wordReducer(state = defaultWords, action) {
  if (action.type === 'ADD_WORD') {
    const newWords = [...state];
    const newWord = {
      id: state.length + 1,
      en: action.en,
      vn: action.vn,
      isMemorized: false,
    };
    newWords.unshift(newWord);
    return newWords;
  }
  if (action.type === 'TOGGLE_MEMORIZED') {
    const newWords = state.map(word => {
      if (word.id === action.id) {
        return {...word, isMemorized: !word.isMemorized};
      }
      return word;
    });
    return newWords;
  }
  if (action.type === 'REMOVE_WORD') {
    const newWords = state.filter(word => word.id !== action.id);
    return newWords;
  }
  return state;
}

export default wordReducer;
