const getAnswer = async () => {
    let response = await fetch('https://yesno.wtf/api')
    if(!response.ok) {
        console.log(response.statusText)
        throw new Error(response.statusText)
    }
    let data = response.json()
    return data
}

export { getAnswer };