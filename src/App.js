import React from "react"
import './App.css'
import {
    compose,
    withProps
} from "recompose"

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Polygon
} from "react-google-maps"

import {
    booleanPointInPolygon, inside
} from '@turf/turf'

const area1 = 						[
    {lat: 21.26611070474684, lng:48.71747233752024 },
    {lat: 21.26677057260064, lng:48.7166656329094 },
    {lat: 21.26733501059712, lng:48.71580643787797 },
    {lat: 21.26736251032685, lng:48.71506900706372 },
    {lat: 21.26787794664388, lng:48.71522719318407 },
    {lat: 21.26863753908857, lng:48.71564341994283 },
    {lat: 21.26939765866221, lng:48.7165793537183 },
    {lat: 21.26966608133456, lng:48.71705623649765 },
    {lat: 21.2700354118865, lng:48.71810770591586 },
    {lat: 21.26997332089527, lng:48.7191243873018 },
    {lat: 21.26983990777152, lng:48.71950690161629 },
    {lat: 21.26961203577385, lng:48.71985312035518 },
    {lat: 21.26952666240232, lng:48.72010880822562 },
    {lat: 21.26563569264007, lng:48.71916037050208 },
    {lat: 21.26514480493235, lng:48.71891109363376 },
    {lat: 21.26509721628115, lng:48.7188554432751 },
    {lat: 21.26536273350709, lng:48.7185281920167 },
    {lat: 21.26556396469884, lng:48.71822838645928 },
    {lat: 21.26546293573485, lng:48.71807364484813 },
    {lat: 21.26611070474684, lng:48.71747233752024 }
];

const area2 = [
    {lat: 21.26547050283314, lng: 48.7180247747018},
    {lat: 21.26527968071111, lng: 48.71785419829027},
    {lat: 21.26305027934983, lng: 48.71718488634205},
    {lat: 21.26115181682349, lng: 48.71652099525235},
    {lat: 21.2610597168518, lng: 48.71639511662697},
    {lat: 21.26101897307229, lng: 48.71621806298811},
    {lat: 21.26117489079277, lng: 48.71568906138102},
    {lat: 21.26105443891036, lng: 48.71553269979366},
    {lat: 21.26093484273553, lng: 48.71552454466993},
    {lat: 21.26100549017809, lng: 48.71338925367411},
    {lat: 21.26149478781841, lng: 48.71336434978812},
    {lat: 21.26385639684157, lng: 48.71298856665499},
    {lat: 21.26548532983888, lng: 48.71270296490634},
    {lat: 21.26562333198163, lng: 48.71267801671256},
    {lat: 21.26617278866978, lng: 48.71342104937738},
    {lat: 21.26699077839916, lng: 48.71447335210421},
    {lat: 21.26729965113388, lng: 48.71508104882709},
    {lat: 21.26727217408974, lng: 48.71573150741328},
    {lat: 21.26654344778259, lng: 48.71675222358159},
    {lat: 21.26591932336909, lng: 48.71757110459762},
    {lat: 21.26591842008419, lng: 48.71758397749612},
    {lat: 21.26547050283314, lng: 48.7180247747018}
]

const area3 = [
    {lat: 21.26519784797037, lng: 48.70985603691767},
    {lat: 21.26511576992167, lng: 48.71057959332373},
    {lat: 21.26520990237419, lng: 48.71123643432868},
    {lat: 21.26533737357676, lng: 48.71203091544061},
    {lat: 21.26561979794789, lng: 48.71265567908304},
    {lat: 21.26374642074399, lng: 48.71298960699437},
    {lat: 21.26153382267446, lng: 48.71333329104842},
    {lat: 21.26102884803088, lng: 48.71338086924755},
    {lat: 21.2609183320457, lng: 48.71260902704344},
    {lat: 21.26070104346984, lng: 48.71155764597685},
    {lat: 21.26054648625838, lng: 48.71153955221462},
    {lat: 21.2601172427277, lng: 48.71139081390589},
    {lat: 21.26019610409673, lng: 48.71086778257981},
    {lat: 21.2604087054693, lng: 48.710414709603},
    {lat: 21.26082834273807, lng: 48.71019169201519},
    {lat: 21.26140109005772, lng: 48.70823500536864},
    {lat: 21.26209252754881, lng: 48.70834086536124},
    {lat: 21.2639630772545, lng: 48.70869971530973},
    {lat: 21.26541784542476, lng: 48.7090956643532},
    {lat: 21.26519784797037, lng: 48.70985603691767}
]

const area4 = [
    {lat: 21.26093929797893, lng: 48.71553884312244},
    {lat: 21.25956837554779, lng: 48.71543628382558},
    {lat: 21.25938146868774, lng: 48.71548086745317},
    {lat: 21.25919873118457, lng: 48.7162052630725},
    {lat: 21.25908567651335, lng: 48.71630286457113},
    {lat: 21.25771904746958, lng: 48.71618396720437},
    {lat: 21.25629818432859, lng: 48.7161355301045},
    {lat: 21.25396640727181, lng: 48.71629547139239},
    {lat: 21.25365568727686, lng: 48.71629661455108},
    {lat: 21.25416063177569, lng: 48.71491440773607},
    {lat: 21.25445221976243, lng: 48.71428525246247},
    {lat: 21.25536222202151, lng: 48.7126374101989},
    {lat: 21.25798135383886, lng: 48.71294303343348},
    {lat: 21.25848530366077, lng: 48.71207672884289},
    {lat: 21.25887388879129, lng: 48.71117286140461},
    {lat: 21.26013638689832, lng: 48.71143237743076},
    {lat: 21.26064082683656, lng: 48.71157019458366},
    {lat: 21.26088366984189, lng: 48.71265039448959},
    {lat: 21.26097627407855, lng: 48.7133548225837},
    {lat: 21.26093971071423, lng: 48.71490900996002},
    {lat: 21.26093929797893, lng: 48.71553884312244}
]

const area5 = [
    {lat: 21.25472165728956, lng: 48.71372440979044},
    {lat: 21.25408438944113, lng: 48.71490573905383},
    {lat: 21.25360554768534, lng: 48.71631056148008},
    {lat: 21.25249997810609, lng: 48.71638710016956},
    {lat: 21.25137077836182, lng: 48.71649739198809},
    {lat: 21.25022306219866, lng: 48.71648488221292},
    {lat: 21.2490611330737, lng: 48.71624262581696},
    {lat: 21.24811421777093, lng: 48.7159646221086},
    {lat: 21.24789641095867, lng: 48.71580265853636},
    {lat: 21.24756227947157, lng: 48.71490193659645},
    {lat: 21.24689327484613, lng: 48.71423288765796},
    {lat: 21.246193645965, lng: 48.71344141182617},
    {lat: 21.2461672930893, lng: 48.71307316505337},
    {lat: 21.24616030245655, lng: 48.71242516467778},
    {lat: 21.24657869594728, lng: 48.71217905800653},
    {lat: 21.24735089378054, lng: 48.71181233634876},
    {lat: 21.24808480234424, lng: 48.71175232186651},
    {lat: 21.25010943555728, lng: 48.71198525715902},
    {lat: 21.25211322156024, lng: 48.71222068143718},
    {lat: 21.25534658689924, lng: 48.71262713203102},
    {lat: 21.25472165728956, lng: 48.71372440979044}
]

const area6 = [
    {lat: 21.24762543517939, lng: 48.71507559632108},
    {lat: 21.24779832024527, lng: 48.71569962867616},
    {lat: 21.24811259488715, lng: 48.71598017711926},
    {lat: 21.24925026172382, lng: 48.71630092260156},
    {lat: 21.24981361136224, lng: 48.71640655433272},
    {lat: 21.25025771564709, lng: 48.71650426269373},
    {lat: 21.2512552906116, lng: 48.71651444182268},
    {lat: 21.25106626426203, lng: 48.71676512361263},
    {lat: 21.25091304252969, lng: 48.71727165690777},
    {lat: 21.24999323902147, lng: 48.71933204009806},
    {lat: 21.2490086364203, lng: 48.72185921662868},
    {lat: 21.24834121326643, lng: 48.72173738095717},
    {lat: 21.24748362933934, lng: 48.72153453624821},
    {lat: 21.24679597736004, lng: 48.72095042997029},
    {lat: 21.24646518007734, lng: 48.72043589645202},
    {lat: 21.24574470302384, lng: 48.7197520966581},
    {lat: 21.24475042321631, lng: 48.71946451103504},
    {lat: 21.2442994359997, lng: 48.71943932927449},
    {lat: 21.2435565007966, lng: 48.71969720361033},
    {lat: 21.2447040629857, lng: 48.71842664957458},
    {lat: 21.2454265062367, lng: 48.71735920104305},
    {lat: 21.24613655863114, lng: 48.71603741282299},
    {lat: 21.24673750260858, lng: 48.71522701384458},
    {lat: 21.24734368412505, lng: 48.7147143337582},
    {lat: 21.24762543517939, lng: 48.71507559632108}
]

const area7 = [
    {lat: 21.23998585622233, lng: 48.7282365574844},
    {lat: 21.23985866413909, lng: 48.72817080687056},
    {lat: 21.24013913756911, lng: 48.72719851235855},
    {lat: 21.24007503266786, lng: 48.72677946556882},
    {lat: 21.23968736331943, lng: 48.72605710958513},
    {lat: 21.24130372968173, lng: 48.7242382800459},
    {lat: 21.24217667018128, lng: 48.72337004216646},
    {lat: 21.24312326999303, lng: 48.72108677112601},
    {lat: 21.24343190033521, lng: 48.7206280567704},
    {lat: 21.24352427817819, lng: 48.72050606621131},
    {lat: 21.24349300044926, lng: 48.71984566843857},
    {lat: 21.24356624475161, lng: 48.71968916962285},
    {lat: 21.24430336078594, lng: 48.71945117715176},
    {lat: 21.24498301247103, lng: 48.71950244894092},
    {lat: 21.24580276652635, lng: 48.71979629819641},
    {lat: 21.24638341466877, lng: 48.72037051501643},
    {lat: 21.24680980022674, lng: 48.72097962568189},
    {lat: 21.24748934214103, lng: 48.72154965043365},
    {lat: 21.24831896265438, lng: 48.7217480601651},
    {lat: 21.24900896109615, lng: 48.72186779034558},
    {lat: 21.24894346442524, lng: 48.72311998437224},
    {lat: 21.24926555767555, lng: 48.72423104307102},
    {lat: 21.24955282910881, lng: 48.72523579830723},
    {lat: 21.24959053108643, lng: 48.72589917795416},
    {lat: 21.24966213402141, lng: 48.72624597887943},
    {lat: 21.2493479654383, lng: 48.72650338900477},
    {lat: 21.24742539975195, lng: 48.72671003625491},
    {lat: 21.24518207742631, lng: 48.72683907932414},
    {lat: 21.24354914482565, lng: 48.72740959066663},
    {lat: 21.23998585622233, lng: 48.7282365574844}
]

const area8 = [
    {lat: 21.24348895165045, lng: 48.72743570209995},
    {lat: 21.24517418757853, lng: 48.72686808327852},
    {lat: 21.24596198813259, lng: 48.72681830820019},
    {lat: 21.24772962148258, lng: 48.72670107829632},
    {lat: 21.24940505850739, lng: 48.7264333385232},
    {lat: 21.25099701951217, lng: 48.7263458262926},
    {lat: 21.25462844416774, lng: 48.72713542477074},
    {lat: 21.25689877479911, lng: 48.72775639125265},
    {lat: 21.25614102123237, lng: 48.72893223839031},
    {lat: 21.25461503831459, lng: 48.73093050766331},
    {lat: 21.25409862836972, lng: 48.73159571074882},
    {lat: 21.25388424638046, lng: 48.73213613317694},
    {lat: 21.2508810074242, lng: 48.73093612113485},
    {lat: 21.2501537808952, lng: 48.73161259370071},
    {lat: 21.24004781534205, lng: 48.72825739221243},
    {lat: 21.24348895165045, lng: 48.72743570209995}
]

const area9 = [
    {lat: 21.25422159936233, lng: 48.73159016166506},
    {lat: 21.25645395766081, lng: 48.72863576705247},
    {lat: 21.25705895290891, lng: 48.72873642476408},
    {lat: 21.26067137802806, lng: 48.72965080742076},
    {lat: 21.26140284964983, lng: 48.73002730797457},
    {lat: 21.26222338834974, lng: 48.73019337176834},
    {lat: 21.26388520328283, lng: 48.73057787804311},
    {lat: 21.26323446520548, lng: 48.73181454379262},
    {lat: 21.26245168571889, lng: 48.73344060385425},
    {lat: 21.26223945886888, lng: 48.73354833563128},
    {lat: 21.26208027794174, lng: 48.73344490869111},
    {lat: 21.26122099200491, lng: 48.73265280518574},
    {lat: 21.25794836910048, lng: 48.732516011485},
    {lat: 21.2558203376639, lng: 48.73236498396957},
    {lat: 21.25476030844651, lng: 48.73231710274598},
    {lat: 21.25391707270884, lng: 48.73213385899712},
    {lat: 21.25422159936233, lng: 48.73159016166506}
]

const area10 = [
    {lat: 21.26394491414724, lng: 48.73054329222214},
    {lat: 21.26200288598048, lng: 48.73008117863233},
    {lat: 21.2614003103509, lng: 48.7300175490298},
    {lat: 21.26078651689782, lng: 48.72965038418978},
    {lat: 21.26056833578211, lng: 48.72864824350508},
    {lat: 21.26065881826214, lng: 48.72808299460048},
    {lat: 21.26118832045295, lng: 48.7273044878168},
    {lat: 21.26260983038338, lng: 48.72677237225551},
    {lat: 21.26370734991203, lng: 48.72648277398645},
    {lat: 21.26526302744209, lng: 48.72605953564047},
    {lat: 21.2657549235912, lng: 48.72593124590239},
    {lat: 21.26639282745298, lng: 48.72586470610221},
    {lat: 21.26493779990923, lng: 48.72876735791608},
    {lat: 21.26394491414724, lng: 48.73054329222214}
];

const cityBorders = [
    {lat: 21.23469619776246, lng: 48.73262185704039},
    {lat: 21.24147458887668, lng: 48.70546688266992},
    {lat: 21.27658647859255, lng: 48.70659340320557},
    {lat: 21.2732803873103, lng: 48.73386149130498},
    {lat: 21.23469619776246, lng: 48.73262185704039}
];


var pt1 = {
    "type": "Feature",
    "properties": {
        "marker-color": "#f00"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [48.72776231, 21.26170752]
    }
};

var poly = {
    "name": "area1",
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [48.73054329222214, 21.26394491414724],
            [48.73008117863233, 21.26200288598048],
            [48.7300175490298, 21.2614003103509],
            [48.72965038418978, 21.26078651689782],
            [48.72864824350508, 21.26056833578211],
            [48.72808299460048, 21.26065881826214],
            [48.7273044878168, 21.26118832045295],
            [48.72677237225551, 21.26260983038338],
            [48.72648277398645, 21.26370734991203],
            [48.72605953564047, 21.26526302744209],
            [48.72593124590239, 21.2657549235912],
            [48.72586470610221, 21.26639282745298],
            [48.72876735791608, 21.26493779990923],
            [48.73054329222214, 21.26394491414724]
        ]]
    },
};

function inZone() {
    var isInside1 = inside(pt1, poly);
    console.log(isInside1);
}

const newMarker = {lat: pt1.geometry.coordinates[0], lng: pt1.geometry.coordinates[1]};

const reverse = (toMap) => {
    return toMap.map( l => {
        return {lat: l.lng, lng: l.lat}
    });
};

//does not work for left bottom where expected val is [-1,-1]...
//it is quick but useless
const anAlgorithm = (area, position) => {
    var latSum = 0, lngSum = 0;
    console.log(area);
    console.log(position);
    for (var i = 0; i < area.length; i++){
        let latLengthToPoint = area[i].lat - position.lat;
        // console.log(area[i].lat + " " +  position.lat);
        // console.log(area[i].lng + " " +  position.lng);
        // console.log(latLengthToPoint);
        let latAbsolutePosition = Math.abs(latLengthToPoint);
        // console.log(latAbsolutePosition);
        let latMagic = latAbsolutePosition + area[i].lat;
        console.log(latMagic);

        latSum += latMagic;

        let lngLengthToPoint = area[i].lng - position.lng;
        // console.log(area[i].lat + " " +  position.lat);
        // console.log(area[i].lng + " " +  position.lng);
        // console.log(lngLengthToPoint);
        let lngAbsolutePosition = Math.abs(lngLengthToPoint);
        // console.log(lngAbsolutePosition);
        let lngMagic = lngAbsolutePosition + area[i].lng;
        // console.log(lngMagic);

        lngSum += lngMagic;
    }
    console.log(latSum);
    console.log(area.length * position.lat);
    console.log(lngSum);
    console.log(area.length * position.lng);

    let latResult = latSum - (area.length * position.lat);
    let lngResult = lngSum - (area.length * position.lng);

    console.log("\nLat Result is: " + latResult + " and Lng result is: " + lngResult);
    return (!(latResult === 0 && lngResult === 0));
};

const isInCity = (pin) => {
    //first determine if you are even in city
    if (anAlgorithm(reverse(cityBorders), pin)) {
        //you are inside a city
        //make a data file of coords one JSON file with all needed info
        //don't do it like a dick...
    }
}


const insideAZone = (area, pin) => {
    //determines whether is in a zone
    let getIsInZone = anAlgorithm(reverse(area), pin);
    //you can change data file!
    //for example to have a name of area type price in it etc...
    if(getIsInZone){
        console.log("V meste snooov");
    } else {
        console.log("V meste nesnooov");
    }
};

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCJU7scD4uZ0nZDS3stMHieSEnLj1mbhxY&callback=initMap",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,

    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap className={"googleMap"}
        defaultZoom={14}
        defaultCenter={{ lat: 48.720228, lng: 21.258217 }}
    >
        {props.isMarkerShown }
        {/*<Marker position={marker} onClick={props.onMarkerClick}/>*/}
        <Marker position={{lat: props.lat, lng: props.lng}} onClick={props.onMarkerClick} />
        <Polygon
            path={reverse(area1)}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={reverse(area2)}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={reverse(area3)}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={reverse(area4)}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={reverse(area5)}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={reverse(area6)}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={reverse(area7)}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={reverse(area8)}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={reverse(area9)}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={reverse(area10)}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
        <Polygon
            path={reverse(cityBorders)}
            //key={1}
            options={{
                fillColor: "#f477ff",
                fillOpacity: 0.4,
                strokeColor: "#7a5a99",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
    </GoogleMap>
);

class App extends React.PureComponent {
    state = {
        isMarkerShown: true,
    };

    render() {
        return (
            <div>
                <MyMapComponent className={"map"}
                    isMarkerShown={this.state.isMarkerShown}
                    lat={48.72776231}
                    lng={21.26170752}
                />
                {inZone()}
                {/*{(anAlgorithm(reverse(area10), newMarker)) ? <a>I'm in selected area</a> : <a>Out of area</a>}*/}
            </div>
        )
    }
}

export default App;