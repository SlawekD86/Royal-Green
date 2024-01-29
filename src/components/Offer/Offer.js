import React from 'react';
import styled from 'styled-components';
import imageOferta from '../../assets/imageOferta.jpg';
import imageAranzacje from '../../assets/imageAranzacje.jpg';
import imageService from '../../assets/imageService.jpg';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;
    padding-bottom: 30px;
`;

const FlexContainer = styled.div`
    display: flex;

    @media (max-width: 450px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const Image = styled.img`
    width: 50%;
    height: auto;

    @media (max-width: 450px) {
        width: 80%;
        border-radius: 50%;
        margin-bottom: 20px;
    }
`;

const ContentContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: justify;
`;

const TextContainer = styled.div`
    max-width: 470px;
    line-height: 1.6;
`;

// Nowa sekcja Aranżacje z innymi stylami
const AranzacjeContainer = styled(FlexContainer)`
    @media (max-width: 450px) {
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;
    }
`;

const Offer = () => {
    return (
        <Section id="offer">
            <FlexContainer>
                <Image src={imageOferta} alt="imageOferta" />
                <ContentContainer>
                    <TextContainer>
                        <h2 style={{ fontSize: '35px', margin: '16px' }}>Oferta</h2>
                        <p style={{ fontSize: '20px', margin: '0' }}>
                            Oferujemy kompleksową obsługę aranżacyjną, dostosowaną do indywidualnych potrzeb klienta. Nasza praca opiera się na pasji do detali i dbałości o estetykę oraz funkcjonalność otoczenia. Staramy się stworzyć harmonijną przestrzeń, która zachwyca i spełnia oczekiwania naszych klientów.
                        </p>
                    </TextContainer>
                </ContentContainer>
            </FlexContainer>
            <AranzacjeContainer>
                <ContentContainer>
                    <TextContainer>
                        <h2 style={{ fontSize: '35px', margin: '16px' }}>Aranżacje</h2>
                        <p style={{ fontSize: '20px', margin: '0' }}>
                            Nasze aranżacje to wynik starannego doboru roślin i ich umiejscowienia, tworząc kompozycje doskonale wpasowujące się w charakter danego miejsca. Dbamy o każdy detal, tworząc przyjemne otoczenie, które inspiruje i pozwala na pełne wykorzystanie potencjału przestrzeni.
                        </p>
                    </TextContainer>
                </ContentContainer>
                <Image src={imageAranzacje} alt="imageAranzacje" />
            </AranzacjeContainer>
            <FlexContainer>
                <Image src={imageService} alt="imageService" />
                <ContentContainer>
                    <TextContainer>
                        <h2 style={{ fontSize: '35px', margin: '16px' }}>Service</h2>
                        <p style={{ fontSize: '20px', margin: '0' }}>
                            Nasze usługi serwisu roślin obejmują pełną opiekę, w tym regularne podlewanie, dokładne nawożenie oraz monitorowanie ich stanu zdrowia. Dodatkowo zapewniamy przesadzanie roślin, uzupełnianie braków w glebie, wymianę podłoża oraz regularne oceny ich kondycji. Dzięki naszemu doświadczeniu i trosce o rośliny zapewniamy im nie tylko estetyczny wygląd, ale także zdrowy i korzystny dla ich rozwoju środowisko.
                        </p>
                    </TextContainer>
                </ContentContainer>
            </FlexContainer>
        </Section>
    );
};

export default Offer;
