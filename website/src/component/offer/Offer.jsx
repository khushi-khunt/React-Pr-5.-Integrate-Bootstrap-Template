import './Offer.css'

const Offer = () => {
    return (
        <div>
            <section className="offer">
                <div className="container">
                    <div className="row">
                        <div className="w-7 w-lg-5 sale">
                            <div className="offer-content">
                                <h2 className=' off px-2'>35%</h2>OFF
                                <h3 className='fw-bolder'>Great deal on organic food.</h3>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />do maecenas accumsan lacus vel facilisis.</h5>

                                <div id="countdown">
                                    <ul className="d-flex justify-center">
                                        <li><p id="days"></p></li>
                                        <li><p id="hours"></p></li>
                                        <li><p id="minutes"></p></li>
                                        <li><p id="seconds"></p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Offer
