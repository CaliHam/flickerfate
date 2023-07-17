const getAnswer = async () => {
    let response = await fetch('https://yesno.wtf/api')
    if(!response.ok) {
        console.log(response)
        throw new Error(response)
    }
    let data = response.json()
    return data
}

export { getAnswer };