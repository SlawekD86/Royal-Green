import React from 'react';
import imageOferta from '../../assets/imageOferta.jpg';
import imageAranzacje from '../../assets/imageAranzacje.jpg';
import imageService from '../../assets/imageService.jpg';

const Offer = () => {
    return (
        <section id="offer" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black', color: 'white', paddingBottom: '30px' }}>
            <div style={{ display: 'flex' }}>
                <img
                    src={imageOferta}
                    alt="imageOferta"
                    style={{ width: '50%', height: 'auto' }}
                />
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', textAlign: 'justify' }}>
                    <div style={{ maxWidth: '470px', lineHeight: '1.6' }}>
                        <h2 style={{ fontSize: '35px', margin: '16px' }}>Oferta</h2>
                        <p style={{ fontSize: '20px', margin: '0' }}>
                            Oferujemy kompleksową obsługę aranżacyjną, dostosowaną do indywidualnych potrzeb klienta. Nasza praca opiera się na pasji do detali i dbałości o estetykę oraz funkcjonalność otoczenia. Staramy się stworzyć harmonijną przestrzeń, która zachwyca i spełnia oczekiwania naszych klientów.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', textAlign: 'justify' }}>
                    <div style={{ maxWidth: '470px', lineHeight: '1.6' }}>
                        <h2 style={{ fontSize: '35px', margin: '16px' }}>Aranżacje</h2>
                        <p style={{ fontSize: '20px', margin: '0' }}>
                            Nasze aranżacje to wynik starannego doboru roślin i ich umiejscowienia, tworząc kompozycje doskonale wpasowujące się w charakter danego miejsca. Dbamy o każdy detal, tworząc przyjemne otoczenie, które inspiruje i pozwala na pełne wykorzystanie potencjału przestrzeni.
                        </p>
                    </div>
                </div>
                <img
                    src={imageAranzacje}
                    alt="imageAranzacje"
                    style={{ width: '50%', height: 'auto' }}
                />
            </div>
            <div style={{ display: 'flex' }}>
                <img
                    src={imageService}
                    alt="imageService"
                    style={{ width: '50%', height: 'auto' }}
                />
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', textAlign: 'justify' }}>
                    <div style={{ maxWidth: '470px', lineHeight: '1.6' }}>
                        <h2 style={{ fontSize: '35px', margin: '16px' }}>Service</h2>
                        <p style={{ fontSize: '20px', margin: '0' }}>
                            Nasze usługi serwisu roślin obejmują pełną opiekę, w tym regularne podlewanie, dokładne nawożenie oraz monitorowanie ich stanu zdrowia. Dodatkowo zapewniamy przesadzanie roślin, uzupełnianie braków w glebie, wymianę podłoża oraz regularne oceny ich kondycji. Dzięki naszemu doświadczeniu i trosce o rośliny zapewniamy im nie tylko estetyczny wygląd, ale także zdrowy i korzystny dla ich rozwoju środowisko.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
