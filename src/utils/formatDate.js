const formatDate = (date) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const now = new Date(date).toLocaleDateString('zh-CN', options)

    return now
}

export default formatDate