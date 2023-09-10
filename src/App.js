import './App.css';
import 'tailwindcss/tailwind.css';
import selfie from './image/selfie.png';

function App() {
  return (
    <div className="App" >
        <div className="mr-20 ml-20">
        <div className="flex mb-8">
            <div className="w-1/2 justify-center">
                <img src={selfie} alt="selfie" className="max-w-md content-center"/>
            </div>
            <div className="w-1/2 flex flex-col justify-center">
                <h1 className="text-4xl font-bold">Estelle
                    BOUTTIER
                    Sophrologue</h1>
                <h4 className="text-4xl font-bold">SOPHROLOGIE CAYCEDIENNE</h4>
                <p className="text-lg">Sophrologue certifiée de la sophrologie Caycédienne, je
                    vous accueille selon vos besoins pour un
                    accompagnement individuel ou collectif afin de
                    retrouver mieux-être et sérénité. Dans une ambiance
                    conviviale, je suis à votre écoute en toute bienveillance.</p>

            </div>

        </div>
        <div className="flex mb-8">
        <p>sdmjkgndwfkgjb</p>
        </div>

        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-20 pl-20 pr-20">La Sophrologie</h1>
            <div className="flex justify-between content-center w-full pl-20 pr-20">
                <div className="w-1/3">
                    <h4 className="text-2xl mb-8">Les origines</h4>
                    <p>C’est grâce aux observations,
                        interrogations, rencontres et
                        voyages du Pr Alfonso Caycedo,
                        docteur en médecine (spécialiste
                        en neurologie et psychiatrie) que
                        la Sophrologie voit le jour dans
                        les années 60. Il se met à étudier
                        la conscience humaine et les
                        moyens de la faire varier dans un
                        but thérapeutique.</p>
                    <div className="rounded-full bg-indigo-500 max-w-8">SOS HARMONIE </div>

                </div>
                <div className="w-1/3">
                    <h4 className="text-2xl mb-8">Définition</h4>
                    <p>C’est une méthode scientifique conçu
                        pour maîtriser l’équilibre du corps et
                        de l’esprit, étudier la conscience et
                        conquérir les valeurs de l’Homme.
                        Nous cherchons à développer une
                        conscience plus sereine par le biais de
                        techniques de relaxation et activation
                        du corps et de l’esprit. Nous pouvons
                        développer sérénité et mieux-être
                        dans notre vie quotidienne, grâce à
                        un entraînement régulier de notre
                        corps et de notre esprit, avec des
                        techniques de respirations et
                        relaxations.</p>
                </div>
                <div className="w-1/3 mb-8">
                    <h4 className="text-2xl">Objectifs</h4>
                    <p>C’est une discipline qui dévoile et
                        renforce les attitudes et valeurs
                        positives au quotidien, que ce soit sur
                        le champ personnel comme
                        professionnel. Elle développe les
                        capacités de gestion active du stress
                        et des émotions négatives.
                        L’accompagnement du sophrologue
                        va vous apporter les outils
                        nécessaires pour vous rendre
                        autonome et que chacun puisse
                        optimiser ses capacités au quotidien.</p>
                </div>
            </div>
        </div>

        <div className="flex mb-8">
            <p>sdmjkgndwfkgjb</p>
        </div>


        </div>
    </div>
  );
}

export default App;
