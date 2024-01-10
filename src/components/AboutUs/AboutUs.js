import React from 'react';
import image2 from '../../assets/image2.jpeg';

const AboutUs = () => {
    return (
        <section id="about" style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'black', color: 'white', paddingBottom: '30px' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px', margin: '60px', textAlign: 'justify' }}>
                <div style={{ maxWidth: '470px', lineHeight: '1.6' }}>
                    <h2 style={{ fontSize: '35px', margin: '16px' }}>O Nas</h2>
                    <p style={{ fontSize: '20px', margin: '0' }}>
                        Jesteśmy firmą specjalizującą się w opiece nad roślinami, dedykującą się projektowaniu i pielęgnacji przestrzeni biurowych oraz mieszkalnych. Nasza pasja do roślin pozwala nam kreować wyjątkowe otoczenia, które są nie tylko estetyczne, ale także sprzyjające zdrowiu i komfortowi. Dzięki naszej ekspertyzie tworzymy spersonalizowane projekty, dostosowując się do unikalnych potrzeb klientów i zapewniając kompleksową opiekę nad roślinami. Naszą misją jest stworzenie przyjemnych, harmonijnych i inspirujących przestrzeni, które przynoszą radość i dobre samopoczucie naszym klientom.
                    </p>
                </div>
            </div>
            <div style={{ flex: 1 }}>
                <img
                    src={image2}
                    alt="image2"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
        </section>
    );
};

export default AboutUs;
