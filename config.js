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
    subtitle: 'An analysis of economics and movement in the novels As I Lay Dying, Their Eyes Were Watching God, The Color Purple, and Salvage the Bones',
    byline: 'Tyler Heron',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'Thesis',
            description: 'Before the works of William Faulkner, Southern literature focused almost exclusively on wealthy white landowners who traveled freely and made their own choices, whether economic or personal. This focus came at the expense of marginalized groups, who were often not fully developed characters but rather a part of the scenery. This tradition is broken, first by Faulkner, whose Bundren family demonstrates how economic desperation transcends racial lines, then by Huston, Walker, and Ward, who show a much more diverse—and much more mobile—South. The four novels thus represent a transition in focus from the planter elite to the everyday individual, who, despite harsh (and sometimes violent) constraints, ultimately have much more agency than was often portrayed.',
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
            rotateAnimation: false,
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
            alignment: 'left',
            hidden: false,
            title: 'Their Eyes Were Watching God',
            image: 'assets/their_eyes_were_watching_god_cover.jpeg',
            description: 'After her childhood in Georgia, Janie is quickly married to Logan Killicks, a farmer in northern Florida. Their marriage is deeply transactional, and Janie&rsquo;s value as a person is almost entirely measured by her domestic output. This marriage is the one most consistent with traditional Southern depictions, and the one she is least happy in. Nanny&rsquo;s declaration that &ldquo;de [black] woman is de mule uh de world&rdquo; (Hurston 14) proves prophetic as Logan eventually demands Janie plow alongside actual mules, reducing her to the beast-of-burden status. She then runs off with Jody, her second husband, to Eatonville. Although Jody becomes financially successful and money is no longer scarce, this change merely transforms her from a farming implement to a display piece; Jody controls all the money, controls with whom she can interact, and even controls how she styles her hair. Unlike the plantation owners of earlier Southern literature, Janie&rsquo;s transactions remain entirely mediated through her husbands.',
            location: {
                center: [-82.31196, 29.35248], 
                zoom: 7.7,
                pitch: 60,
                bearing: -30,
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
            description: 'Jody&rsquo;s death marks a crucial turning point in Janie&rsquo;s pursuit of agency. Her third husband, Tea Cake, offers her significantly more freedom. Money flows in both directions, as Tea Cake takes from her savings but also shares his gambling winnings, ultimately creating a relationship where Janie is able to make independent financial decisions. For her, this sense of agency matters more than the material security that came with submission in previous relationships. Her physical movement also reflects this shift, as she and Tea Cake marry in Jacksonville and later travel to the Muck. During the hurricane, Tea Cake asks, &ldquo;Ah reckon you wish now you had of stayed in yo&rsquo; big house away from such as dis, dont yuh?&rdquo; (Hurston 159) Janie&rsquo;s firm denial reveals her transformation from object to actor: she would rather face danger freely than live in comfort under control.',
            location: {
                center: [-81.24261, 26.92939], 
                zoom: 7.32,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'chapter-six',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple',
            image: 'assets/color_purple_cover.jpg',
            description: 'Alice Walker’s The Color Purple traces the protagonist Celie’s journey from near-total powerlessness to independence in the first half of the 20th century South. At the beginning of the novel, Celie exemplifies the erasure of agency, often lacking even the language to articulate the abuse she suffers. Over time, however, she gradually reclaims her voice and autonomy, largely through the support of other women. This transformation allows her to shift from a figure relegated to the margins of society to someone who actively shapes her own future. In doing so, Celie’s story directly challenges Southern literary traditions that have ignored the agency of Black women.',
            location: {
                center: [-83.56989, 32.93096], 
                zoom: 8.27,
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
            id: 'chapter-seven',
            alignment: 'center',
            hidden: false,
            title: 'The Color Purple',
            image: './assets/color_purple_field.jpg',
            description: 'Unlike Janie in Their Eyes Were Watching God, Celie’s journey toward agency is inseparable from her economic evolution. In her marriage to Albert, she functions as unpaid labor with no control over household resources. She also lacks freedom of movement and remains stuck in rural Georgia. However, as Celie’s relationship with Shug Avery progresses, she gains knowledge (learning of Nettie&rsquo;s hidden letters), economic skills (developing her pants-making business), freedom of movement (travelling to Memphis), and eventual property ownership (inheriting her biological father&rsquo;s house). Celie’s consummate act of agency, in my opinion, is her forgiveness. She has every reason to be bitter at the world, and yet, she “thank[s] God let [her] gain understanding enough to know love can&rsquo;t be halted just cause some peoples moan and groan” (Walker 267-8). Despite the hopelessness of Celie’s initial position, the novel concludes with a powerful sense of hope and renewal.',
            location: {
                center: [-87.85153, 34.30318], 
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-eight',
            alignment: 'left',
            hidden: false,
            title: 'The Color Purple',
            image: 'assets/firestone_farm.jpg',
            description: 'The Color Purple’s dramatically alters what constitutes the “South.” While Celie initially remains constrained in Georgia, Nettie&rsquo;s missionary journey to Africa creates a link between the American South and the Global South, connecting marginalized peoples worldwide. This expanded mobility shatters the view of Black characters as stationary. Furthermore, Nettie&rsquo;s letters reveal parallel systems of exploitation: just as slavery exploited Black Americans, imperialism extracts African resources while imposing foreign cultural values.',
            location: {
                center: [-10.81671, 6.35601], 
                zoom: 9.27,
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
            alignment: 'left',
            hidden: false,
            title: 'Salvage the Bones',
            image: 'assets/salvage_the_bones_cover.jpg',
            description: 'For the past century, many Southern writers have been trying to escape the long shadow that Faulkner cast. While many writers tried to dance around it, Jesmyn Ward goes straight through it. Salvage the Bones can thus be seen as the 21st-century response to As I Lay Dying, ultimately affirming its message about the complexities of “simple” folk while dismantling other prejudices that Faulkner inadvertently relied on.',
            location: {
                center: [-89.68775, 30.01698], 
                zoom: 8.47,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-nine',
            alignment: 'right',
            hidden: false,
            title: 'nine',
            image: 'assets/katrina_damage_ms.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-89.68775, 30.01698], 
                zoom: 8.47,
                pitch: 0,
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
