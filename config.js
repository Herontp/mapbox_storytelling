var config = {
    style: 'mapbox://styles/tpheron14/cmah2rb3e00e601s8dh9k5yx0',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoidHBoZXJvbjE0IiwiYSI6ImNtOTdxdm9hMzAwZHUya3BxeW1rdTdydGIifQ.ioqBbGCyppXP8_ehjoxzHg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'blue'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Economic Agency and Mobility in the Postbellum American South',
    subtitle: 'An analysis of economics and movement in the novels As I Lay Dying, Their Eyes Were Watching God, The Color Purple by Alice Walker, and Salvage the Bones',
    byline: 'Tyler Heron',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'Thesis',
            description: 'Before the works of William Faulkner, Southern literature focused almost exclusively on wealthy white landowners who traveled freely and made their own choices, whether economic or personal. This came at the expense of marginalized groups, who were often not fully developed characters but rather a part of the scenery. This tradition is broken, first by Faulkner, whose Bundren family demonstrates how economic desperation transcends racial lines, then by Huston, Walker, and Ward, who show a much more diverse—and much more mobile—South. The four novels thus represent a transition in focus from the planter elite to the everyday individual, who, despite harsh (and sometimes violent) constraints, ultimately have much more agency than is often portrayed.',
            location: {
                center:[-88.32653, 31.14594],
                zoom: 4.5,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'As I Lay Dying',
            image: 'assets/as_i_lay_dying.jpg',
            description: 'As I Lay Dying tells the story of the Bundren family, a family of poor white farmers who are far removed from the plantation class. Their journey to Jefferson is both a literal odyssey across a fictionalized county as well as a figurative rebellion against the prevailing narrative, showing that “simple” folk can and do travel, and that they hold complex and sometimes contradicting thoughts and feelings.',
            location: {
                center:[-89.52501, 34.32061],
                zoom: 11.75,
                pitch: 30,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two',
            alignment: 'right',
            hidden: false,
            title: 'As I Lay Dying',
            image: 'assets/as_i_lay_dying.jpg',
            description: 'Unlike the wealthy landowners who previously dominated Southern literature, the Bundrens’ economic transactions are minor in scale but no less significant in impact. These exchanges range from the serious, such as Dewey Dell’s desperate attempt to obtain money for an abortion, to the seemingly trivial, like Anse’s purchase of false teeth. Crucially, however, these purchases represent a deliberate choice. With this, Faulkner grants agency to characters who, in earlier Southern literature, might have existed only as part of the background or landscape.',
            location: {
                center:[-89.52501, 34.32061],
                zoom: 11.75,
                pitch: 30,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'chapter-three',
            alignment: 'left',
            hidden: false,
            title: 'Their Eyes Were Watching God',
            image: 'assets/their_eyes_were_watching_god_cover.jpeg',
            description: 'Their Eyes Were Watching God tells the story of Janie Crawford in her quest to find happiness. It covers the journey of most of her life, from her marriage to Logan Killicks to her ultimate return to Eatonville. Through Janie, Hurston demonstrates how a Black woman in the early 20th-century South could, despite significant racial and gender constraints, exercise agency in both her economic circumstances and physical movement, establishing her as a fully realized character whose internal journey matters as much as her external one.',
            location: {
                center: [-83.76769, 28.43978], 
                zoom: 5.85,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-four',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God',
            image: 'assets/their_eyes_were_watching_god_cover.jpeg',
            description: 'After her childhood in Georgia, Janie is quickly married to Logan Killicks, a farmer in northern Florida. Their marriage is deeply transactional, and Janie&rsquo;s value as a person is almost entirely measured by her domestic output. This marriage is the one most consistent with traditional Southern depictions, and the one she is least happy in. Nannys declaration that &ldquo;de [black] woman is de mule uh de world&rdquo; (Hurston 14) proves prophetic as Logan eventually demands Janie plow alongside actual mules, literally reducing her to the beast-of-burden status Black women were assigned in the hierarchy of the South. She then runs off with Jody, her second husband, to Eatonville. As Jody becomes very successful, and money ceases to be as much of an issue, one would expect Janie to have more agency. However, this change merely transforms her from a farming implement to a display piece; Jody controls all the money, controls with whom she can interact, and even controls how she styles her hair. Unlike the plantation owners of earlier Southern literature, Janie&rsquo;s transactions remain entirely mediated through her husbands.',
            location: {
                center: [-82.31196, 29.35248], 
                zoom: 7.7,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-five',
            alignment: 'left',
            hidden: false,
            title: 'Their Eyes Were Watching God',
            image: 'assets/their_eyes_were_watching_god_cover.jpeg',
            description: 'Description of the Olinka people',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'chapter-five',
            alignment: 'right',
            hidden: false,
            title: 'new title',
            image: '512px-Keezell_Hall_(JMU).jpg',
            description: 'new description',
            location: {
                center: [-78.87287632435259, 38.43871122711081], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },        
        {
            id: 'chapter-six',
            alignment: 'left',
            hidden: false,
            title: 'six',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212489646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-seven',
            alignment: 'right',
            hidden: false,
            title: 'seven',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212412346295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-eight',
            alignment: 'centered',
            hidden: false,
            title: 'eight',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410656295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-nine',
            alignment: 'right',
            hidden: false,
            title: 'nine',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47216910646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-ten',
            alignment: 'left',
            hidden: false,
            title: 'ten',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47253410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-conclusion',
            alignment: 'left',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212470646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
