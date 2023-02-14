const shorter = text => {
     const splitedText = text.split(' ')
     const shortedText = `${splitedText[0]} ${splitedText[1]}`

     return shortedText
}

export { shorter }