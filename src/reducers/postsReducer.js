const defaultPostsReducerState = [
    { id: '1', clan: 'Intership', user: 'Mike', text: 'I want to offer you a great opportunity for doing internship.' },
    { id: '2', clan: 'Finance', user: 'Andrew', text: 'To invest is to allocate money in the expectation of some benefit in the future. In finance, the benefit from an investment is called a return. The return may consist of a gain (or loss) realised from the sale of a property or an investment, unrealised capital appreciation (or depreciation), or investment income such as dividends, interest, rental income etc., or a combination of capital gain and income. The return may also include currency gains or losses due to changes in the foreign currency exchange rates. Investors generally expect higher returns from riskier their investments. When a low risk investment is made, the return is also generally low. Similarly, high risk comes with high returns. Investors, particularly novices, are often advised to adopt a particular investment strategy and diversify their portfolio. Diversification has the statistical effect of reducing overall risk.' },
    { id: '3', clan: 'Travel', user: 'Clara', text: 'Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task. This was capitalised on by people like Thomas Cook selling tourism packages where trains and hotels were booked together. Airships and airplanes took over much of the role of long-distance surface travel in the 20th century, notably after the second World War where there was a surplus of both aircraft and pilots. Indeed, air travel has become so ubiquitous in the 21st century that one woman, Alexis Alford, visited all 196 countries before the age of 21.' },
    { id: '4', clan: 'Tourism', user: 'Aditya', text: 'Lakshadweep beaches are untouched by time and have pristine blue water which makes it the best fun summer destination.' }
]

const postsReducer = (state = defaultPostsReducerState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default postsReducer