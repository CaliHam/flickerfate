const getAnswer = async () => {
    let response = await fetch('https://yesno.wtf/api')
    if(!response.ok) {
        throw new Error(response)
    }
    let data = response.json()
    return data
}

export { getAnswer };