"use strict";(self["webpackChunkuzbek"]=self["webpackChunkuzbek"]||[]).push([[103],{6861:function(e,i,t){t.r(i),t.d(i,{default:function(){return Pe}});var a=t(6768),s=t(4232),u=t(1420),o=t(2325);const n={class:"main"},r={style:{width:"160px",height:"100%","border-right":"1px solid #EBEEF0",position:"absolute",top:"0","z-index":"1000"},class:"hid"},l={style:{position:"sticky",top:"120px"}},m={class:"text-box hid"},d={style:{width:"100%"}},c={id:"section-0",class:"section"},p={id:"section-1",class:"section"},q={style:{position:"relative",width:"100%","background-color":"#F7F8FA"}},v={id:"section-2",class:"section"},b={id:"section-3",class:"section"},g={id:"section-5",class:"section"},h={id:"section-6",class:"section",style:{"padding-bottom":"60px"}};function f(e,i,t,f,k,A){const x=(0,a.g2)("WhoWeaAre"),L=(0,a.g2)("OurHistory"),C=(0,a.g2)("CultureAndTraditions"),_=(0,a.g2)("PopularPersons"),y=(0,a.g2)("EducationAndSport"),E=(0,a.g2)("Help");return(0,a.uX)(),(0,a.CE)("div",n,[(0,a.Lk)("div",r,[(0,a.Lk)("div",l,[(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(k.sections,((e,i)=>((0,a.uX)(),(0,a.CE)("li",{key:i,style:{cursor:"pointer"}},[(0,a.Lk)("div",{class:(0,s.C4)(["circle",{active:k.currentSection===i}])},null,2)])))),128))])])]),(0,a.Lk)("div",m,(0,s.v_)(k.sections[k.currentSection]),1),(0,a.Lk)("div",d,[(0,a.Lk)("div",c,[(0,a.bF)(x,{data:k.who_we_are},null,8,["data"])]),(0,a.Lk)("div",p,[(0,a.bF)(L,{data:k.our_history},null,8,["data"])]),(0,a.Lk)("div",q,[i[0]||(i[0]=(0,a.Lk)("div",{style:{position:"absolute",bottom:"0",right:"0"}},[(0,a.Lk)("img",{src:u,alt:""})],-1)),i[1]||(i[1]=(0,a.Lk)("div",{style:{position:"absolute",top:"0",right:"0"}},[(0,a.Lk)("img",{src:o,alt:""})],-1)),(0,a.Lk)("div",v,[(0,a.bF)(C,{data:k.culture},null,8,["data"])])]),(0,a.Lk)("div",b,[(0,a.bF)(_,{data:k.famous},null,8,["data"])]),i[2]||(i[2]=(0,a.Lk)("div",{id:"section-4",class:"section"},null,-1)),(0,a.Lk)("div",g,[(0,a.bF)(y,{data_ed:k.ed,data_sp:k.sp},null,8,["data_ed","data_sp"])]),(0,a.Lk)("div",h,[(0,a.bF)(E,{data:k.help},null,8,["data"])])])])}t(8992),t(4520),t(2577),t(3949);var k=t(2569);function A(e,i,t,u,o,n){const r=(0,a.g2)("sections");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(r,null,{title:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(t.data.title||o.title),1)])),content:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(t.data.mini_desc||o.content),1)])),_:1})])}var x={name:"WhoWeaAre",components:{Sections:k.A},props:{data:{type:Object,required:!0}},data(){return{title:"Кто мы?",content:"Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы."}}},L=t(1241);const C=(0,L.A)(x,[["render",A]]);var _=C;const y={class:"btn"},E={class:"game-section"},w={class:"btn-mobile"},F={class:"carousel-container"},I=["onClick"],B={key:0,class:"overlay"},S={class:"item-desc"},W={key:0,class:"dots"},D=["onClick"];function M(e,i,t,u,o,n){const r=(0,a.g2)("left"),l=(0,a.g2)("right"),m=(0,a.g2)("sections");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(m,{class:"mob-section"},(0,a.eX)({"title-button":(0,a.k6)((()=>[(0,a.Lk)("div",y,[(0,a.bF)(r,{onClick:n.scrollLeft},null,8,["onClick"]),(0,a.bF)(l,{onClick:n.scrollRight},null,8,["onClick"])])])),content:(0,a.k6)((()=>[(0,a.Lk)("section",E,[(0,a.Lk)("div",w,[(0,a.bF)(r,{onClick:n.scrollLeft,"is-white":!0},null,8,["onClick"]),(0,a.bF)(l,{onClick:n.scrollRight,"is-white":!0},null,8,["onClick"])]),(0,a.Lk)("div",F,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.data,((e,i)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,s.C4)(["item",{active:o.activeIndex===i}]),key:i,style:(0,s.Tr)({backgroundImage:`url(${e.image})`}),onClick:e=>n.onCardClick(i)},[o.activeIndex===i?((0,a.uX)(),(0,a.CE)("div",B)):(0,a.Q3)("",!0),(0,a.Lk)("div",S,[(0,a.Lk)("h3",null,(0,s.v_)(e.mini_desc),1),(0,a.Lk)("p",null,(0,s.v_)(e.full_desc),1)])],14,I)))),128))]),n.isMobile?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",W,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.data,((e,i)=>((0,a.uX)(),(0,a.CE)("span",{key:i,class:(0,s.C4)({active:o.activeIndex===i}),onClick:e=>n.setActive(i)},null,10,D)))),128))]))])])),_:2},[n.isMobile?void 0:{name:"title",fn:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(n.firstTitle),1)])),key:"0"}]),1024)])}var T=t(7324),X=t(5323),j={name:"OurHistory",components:{Right:X.A,Left:T.A,Sections:k.A},props:{data:{type:Array,required:!0}},data(){return{title:"Наша история",games:[{title:"Dota 2",description:"Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",image:t(6634)},{title:"The Witcher 3",description:"The Witcher 3 is a role-playing game set in an open world developed by CD Projekt Red.",image:t(1254)},{title:"RDR 2",description:"RDR 2 is an action-adventure game developed and published by Rockstar Games.",image:t(9736)},{title:"PUBG Mobile",description:"PUBG Mobile is a battle royale game where players fight to be the last one standing.",image:t(7217)},{title:"Fortnite",description:"Fortnite is a battle royale game where 100 players fight to be the last person standing.",image:t(3965)}],activeIndex:0,windowWidth:window.innerWidth}},computed:{isMobile(){return this.windowWidth<=768},firstTitle(){return this.data.find((e=>e.title))?.title||null},firstButtonsTitle(){return this.data.find((e=>e.buttons_title))?.buttons_title||null}},methods:{setActive(e){this.activeIndex=e},onCardClick(e){this.setActive(e)},scrollLeft(){this.activeIndex>0&&this.setActive(this.activeIndex-1)},scrollRight(){this.activeIndex<this.data.length-1&&this.setActive(this.activeIndex+1)}},watch:{activeIndex(e){const i=this.$el.querySelector(".carousel-container"),t=this.isMobile?i.offsetWidth:i.querySelector(".item").offsetWidth;i.scrollTo({left:e*t,behavior:"smooth"})}},mounted(){window.addEventListener("resize",(()=>{this.windowWidth=window.innerWidth}))}};const O=(0,L.A)(j,[["render",M],["__scopeId","data-v-0d44e87a"]]);var H=O;const P={class:"btn"},R={class:"fade-carousel"},z=["src","alt"],$={class:"carousel-caption"},U={class:"font-gilroy"},G={class:"btn"};function K(e,i,t,u,o,n){const r=(0,a.g2)("left"),l=(0,a.g2)("right"),m=(0,a.g2)("sections");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(m,null,{title:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(o.title),1)])),"title-button":(0,a.k6)((()=>[(0,a.Lk)("div",P,[(0,a.bF)(r,{onClick:n.prevSlide},null,8,["onClick"]),(0,a.bF)(l,{onClick:n.nextSlide},null,8,["onClick"])])])),content:(0,a.k6)((()=>[(0,a.Lk)("div",R,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.data,((e,i)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,s.C4)(["carousel-item",{active:o.activeIndex===i}]),key:i},[(0,a.Lk)("img",{src:e.image,alt:e.image,class:"carousel-image"},null,8,z),(0,a.Lk)("div",$,[(0,a.Lk)("h3",U,(0,s.v_)(e.title),1),(0,a.Lk)("p",null,(0,s.v_)(e.full_desc),1)])],2)))),128))])])),btn:(0,a.k6)((()=>[(0,a.Lk)("div",G,[(0,a.bF)(r,{onClick:n.prevSlide},null,8,["onClick"]),(0,a.bF)(l,{onClick:n.nextSlide},null,8,["onClick"])])])),_:1})])}var Q={name:"CultureAndTraditions",components:{Left:T.A,Right:X.A,Sections:k.A},props:{data:{type:Array,required:!0}},data(){return{title:"Культура и традиция",slides:[{title:"Филиалы “ЕПУК”",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, assumenda beatae blanditiis consequatur cum cumque cupiditate dignissimos ea eius, enim ex excepturi expedita impedit inventore labore nam nemo nihil numquam pariatur perferendis perspiciatis placeat quisquam reiciendis repellendus sit tempora voluptas? Ab, accusantium dolor dolores eos fuga in magni, maiores minima mollitia nulla odit omnis quibusdam similique totam veritatis voluptas voluptate! Alias amet asperiores deserunt ea esse et fugit ipsum modi nisi vel. Accusantium alias blanditiis, dolore illum repellendus similique suscipit voluptatum. Aspernatur aut deleniti deserunt eaque esse, est et illum inventore ipsam officia officiis optio placeat possimus quas recusandae.",image:t(6634)},{title:"Филиалы “ЕПУК” 2",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate fugiat natus, quaerat repudiandae sequi voluptatem! Amet animi architecto assumenda commodi culpa cum deleniti, dignissimos doloremque doloribus dolorum earum enim error est illo illum impedit incidunt ipsam magnam natus officiis quae reiciendis sint temporibus unde vero. Deleniti doloribus minima nemo numquam vero! Adipisci, alias at doloribus omnis porro saepe? Architecto dolor, ducimus earum enim illum, maxime nesciunt, officia omnis quidem quos recusandae sed velit voluptate. Aperiam commodi esse hic odit pariatur quaerat tempora ullam voluptatem. Aliquam cum explicabo facilis molestias nam necessitatibus officiis quaerat quisquam soluta veniam. Ab beatae doloribus molestias quia repellendus? Animi deserunt dolorem incidunt magnam mollitia omnis sunt. Adipisci aspernatur assumenda blanditiis ducimus, fuga id inventore magni molestias perferendis placeat porro quae repellat sint sit suscipit temporibus voluptate, voluptatem. Animi eligendi nihil obcaecati porro, quisquam quos? Alias, amet consectetur deserunt eius expedita nihil ullam voluptates! Atque debitis delectus dolor excepturi, explicabo harum illum maiores quidem similique suscipit velit voluptatibus? Asperiores aut ea eligendi, explicabo harum id illum impedit ipsam laudantium libero magnam minus modi molestiae nam nemo omnis quo similique soluta velit voluptates? Aliquid asperiores consectetur cum distinctio dolores ea et, hic molestias optio praesentium quis quo quod quos recusandae reiciendis rem similique suscipit, totam? Facere ipsam nostrum odio, placeat possimus quia quis sint voluptatum. Ab accusantium alias aspernatur at aut eaque ex facilis illum inventore laudantium necessitatibus obcaecati odio officia placeat, recusandae reiciendis saepe, similique sunt vel voluptatem. Cumque delectus libero natus nihil obcaecati perferendis rerum. At consequatur dolor iure nemo veritatis! Ab accusamus aliquam amet animi consequatur corporis debitis, deserunt distinctio dolor doloribus ea, exercitationem fugit illum incidunt ipsam iure labore laudantium mollitia non numquam odio officia omnis provident quae quia ratione similique sint vel vero voluptas. Alias consequuntur doloribus ducimus eaque enim, error illo iure molestias natus odio pariatur quibusdam tempora temporibus totam vel vero voluptatibus! Ad aperiam consequatur cum eum exercitationem expedita libero, officia veritatis voluptatem. Adipisci amet architecto atque beatae dolores error minus numquam odio, perspiciatis possimus quas quis quisquam quo repellat reprehenderit sint, sunt tempore ullam voluptates voluptatum! Accusamus, amet asperiores assumenda consequuntur cumque delectus doloribus eaque harum id, illo inventore magnam maxime nemo, nihil nulla numquam praesentium quasi quia ratione suscipit velit vero voluptate? Facilis incidunt ipsam nisi porro quis repellendus velit! A consequuntur culpa, delectus dignissimos earum hic id inventore ipsum iure magni nam nobis omnis quaerat quasi similique tempora unde ut velit veniam voluptatum. Facere facilis in ipsa nesciunt. Dolores fugit praesentium quibusdam. Fuga illo impedit minima totam voluptatem! Beatae dicta dolor impedit magni quae? Consequatur, cumque doloremque dolores libero nobis quidem sunt unde voluptatum. Animi, commodi illo minima modi mollitia recusandae sunt totam voluptates? A ad deserunt doloremque molestias non rerum saepe, voluptates? Assumenda atque consequatur doloribus eaque error, ex excepturi fugiat illum laborum minus modi molestias natus nobis praesentium reiciendis sint sunt suscipit ullam. At consequatur corporis dicta dolore eius eos eveniet, excepturi expedita inventore magni, maiores minus molestiae mollitia nam natus non numquam odit officiis possimus quam qui reprehenderit repudiandae soluta tempora ut vel velit veniam. Atque commodi corporis dicta error fugiat iure laboriosam molestiae numquam obcaecati omnis, placeat porro praesentium quo ratione, sint sunt tenetur. Deleniti, dolorum ea esse explicabo ipsam laborum nostrum numquam quidem reprehenderit unde velit voluptatem voluptates! Accusamus ad dignissimos dolor, eos eum facere harum id illum itaque laborum molestiae necessitatibus nesciunt officia optio perspiciatis quasi quidem quisquam quos reprehenderit tempore. Deleniti exercitationem laudantium minima modi! Aliquid distinctio facilis harum sed vero! Asperiores consequuntur cupiditate labore libero modi obcaecati pariatur rerum sunt ullam vel? Ea ex fuga nulla sit voluptatum? Adipisci at libero necessitatibus quasi repudiandae temporibus? At dicta dolore in ipsum nostrum quasi qui reprehenderit? Alias aspernatur culpa cum dolore ducimus excepturi, expedita facere itaque magni molestiae odit perferendis quisquam rerum, sapiente soluta sunt tempore vel veritatis voluptates voluptatum. Amet architecto consequatur corporis fuga ipsum mollitia, placeat praesentium totam vitae. Ab ad adipisci aperiam asperiores assumenda atque aut commodi cum dolores ducimus, eius est eveniet fuga harum magnam maiores molestiae nam natus quia quis repudiandae saepe similique suscipit tempore veritatis vero, voluptatem voluptatibus. Amet aspernatur eaque eveniet fugit id, laborum molestiae natus odio qui quo saepe, sit unde voluptatem. Cum cumque doloribus, ea error esse est explicabo ipsam ipsum labore laboriosam necessitatibus nostrum officia perspiciatis quaerat qui saepe voluptate voluptatibus. Accusantium ad asperiores cum ea eius eum harum inventore ipsum magni, molestias neque odio omnis quaerat qui recusandae sunt, tempora, vero. In laudantium nostrum omnis pariatur quasi quibusdam sequi suscipit voluptate voluptatem voluptatum. At dolores ducimus est nulla quos recusandae totam. Accusantium alias aspernatur aut blanditiis doloribus dolorum ducimus earum eius eos, excepturi exercitationem facere ipsa ipsam itaque laborum laudantium libero maxime minima molestias mollitia nobis placeat provident quas quidem ratione repellendus sint ut. Cupiditate eaque eveniet laboriosam modi nesciunt sapiente sunt, vitae voluptatem? A ab ad asperiores atque, aut consectetur consequuntur corporis dolores ea eos eveniet fugit illo labore laudantium magnam maxime minus molestiae, nam necessitatibus nihil, pariatur possimus recusandae repellat sapiente sit tempora tenetur vero! Alias architecto dolore et sit! Atque beatae facere fugiat pariatur possimus quos, reiciendis sint ullam vitae! Aliquam architecto autem commodi consequatur consequuntur cum dolores ea eligendi, facere harum hic illum impedit, labore molestias non numquam obcaecati, pariatur possimus praesentium quae quam recusandae reiciendis sapiente sed soluta? Accusantium consequatur distinctio doloribus dolorum ea eius eos esse exercitationem, illum laudantium libero nam natus necessitatibus obcaecati officiis quasi qui quidem quo reprehenderit voluptate. Animi debitis, dignissimos eaque est eveniet ipsam non officiis pariatur recusandae repudiandae! Animi consequatur doloremque ducimus id nam nihil praesentium quaerat quos recusandae rerum! Accusamus accusantium ad amet aperiam architecto asperiores assumenda autem commodi consequatur distinctio dolore ducimus esse eum eveniet excepturi exercitationem explicabo, fuga fugiat fugit harum illo in libero mollitia non, nulla numquam, officiis pariatur perferendis perspiciatis placeat porro quae quidem similique totam unde velit voluptates? Asperiores at consectetur corporis distinctio dolore doloremque dolorum expedita facere harum illum iure mollitia officia quaerat recusandae reiciendis, reprehenderit suscipit tempore totam ut vero? A, accusamus ad aperiam architecto, assumenda consequatur cumque debitis ea eaque eveniet in laboriosam minima omnis perspiciatis, praesentium quas quasi quibusdam sequi temporibus velit veritatis vero voluptatum. Aliquam aliquid cumque deserunt eos et, ipsam minima modi rerum! Aperiam consequuntur ut voluptatum. Illum, quaerat, vel. Alias autem dolore, dolorum facilis fugiat ipsum libero minima nesciunt omnis quisquam saepe, tenetur. A eligendi est, excepturi hic inventore iste libero modi neque odit quas! Delectus dignissimos eligendi esse est facere ipsum laborum, natus nihil quam quas quia quo repellat soluta tenetur ut! A accusantium ad adipisci architecto, commodi cum deleniti deserunt distinctio dolorem ducimus eaque expedita facilis fuga fugit harum illum impedit in iste labore magni neque nisi non obcaecati officia omnis placeat quae quam quasi ratione repellat repellendus sint suscipit ullam. A accusantium ad adipisci atque commodi consequatur consequuntur dolorem ducimus enim est expedita facere facilis hic id impedit laboriosam magnam mollitia nam nisi, nulla pariatur quasi quis quod ratione saepe suscipit ullam veritatis! Accusamus architecto delectus dolore eius fuga odio perspiciatis rem repellendus suscipit tempora? Adipisci aliquid architecto asperiores dolor eius natus odit repellat ullam vitae voluptas! Distinctio dolorum exercitationem explicabo inventore ipsa, ipsam iusto molestias natus nesciunt odio perferendis, quaerat quisquam repellat sint temporibus, vel veritatis. Cum dolorem est quod rem ullam? Blanditiis delectus ipsa iusto minus molestiae officia, recusandae repellat soluta? Excepturi reprehenderit sapiente veritatis voluptate voluptatibus! A aperiam aspernatur aut, corporis distinctio dolorem dolorum ducimus eos, fugit impedit minus, molestias numquam recusandae similique soluta voluptate voluptatum! Alias at dolore doloribus ea est, explicabo maiores nihil provident sit voluptatum. A aliquam expedita explicabo facilis harum porro quia rem repudiandae sed voluptatem? Consequatur, pariatur, ut. At eum libero natus necessitatibus, optio quaerat repellat rerum ut! Adipisci autem debitis inventore ipsum numquam quam ratione repellat. Ab, adipisci assumenda consectetur, cum delectus doloremque eos et ex excepturi harum impedit in inventore ipsam iste itaque maiores minima nisi odio qui quod ratione sit ullam voluptate voluptatem voluptates. Beatae delectus dolor facilis hic obcaecati optio sapiente vitae! Aliquam beatae corporis dolorum et, modi soluta. Aspernatur autem beatae blanditiis commodi corporis culpa deleniti distinctio enim eos facere id illum magnam maiores molestiae necessitatibus nemo nihil nostrum optio, placeat porro quaerat quas quasi reprehenderit rerum saepe similique sint totam! Aperiam aut consequatur dolorem eos ex officiis, porro sequi sunt. Accusantium asperiores, autem culpa cumque distinctio doloribus dolorum eaque est et eum eveniet impedit ipsum magni modi molestias natus nemo nihil nisi non pariatur placeat porro praesentium quae quisquam quod quos reprehenderit sed, sequi soluta totam ut, veniam vitae voluptatem. Libero perspiciatis quae quos, temporibus totam voluptatum. Aperiam distinctio pariatur rerum sunt tempora. Accusantium aliquam commodi consectetur culpa dolorum earum est expedita facere, fugiat ipsam iure, laboriosam laborum laudantium maiores maxime necessitatibus neque nesciunt optio provident quasi quidem rerum saepe sapiente sed sit vitae voluptate voluptatem. Accusamus blanditiis, excepturi fugiat necessitatibus odit officiis perspiciatis sed! Cumque dolorem dolorum id nesciunt optio perferendis quas quidem voluptatum. Doloribus laborum qui saepe. Ab accusamus aspernatur atque beatae delectus enim excepturi expedita facere, illum ipsum nam, necessitatibus quia quis quod rem repellat, sed? Ab aliquid consequatur cumque deleniti, dolore doloribus dolorum eaque eius eos est et eveniet fugit id inventore laboriosam magni natus necessitatibus nesciunt nihil numquam officia omnis praesentium, provident quam quis quo, quod recusandae repellat rerum similique sint sunt tempore vel veniam veritatis voluptatem voluptates! Beatae dolor eius enim nemo nesciunt quaerat voluptatibus! A, accusamus cum deserunt dolore dolorum eaque enim error explicabo facere harum ipsa laudantium maxime minus nam odio recusandae sapiente, sunt veritatis vitae voluptatem! Doloremque illo magnam magni maiores obcaecati odit quidem rerum, tempora vero. Aliquid cum dicta eius, enim esse facere fugit harum hic libero nostrum nulla omnis optio, quam quas quis quisquam, repellendus reprehenderit similique totam voluptate. Culpa earum eius enim et, fuga ipsam iusto quibusdam recusandae ullam vero! Laudantium, mollitia, sed. Architecto consequatur culpa distinctio fuga incidunt ipsam provident soluta. Dolorum expedita fugiat nobis odio quaerat quas, quasi ratione repudiandae vel? A ab animi at commodi dicta dolore et facere, fugit hic incidunt ipsum labore magni modi neque nobis nostrum pariatur quasi quod rem reprehenderit. A, accusantium amet aspernatur cupiditate doloribus ducimus eos eum exercitationem explicabo facilis fuga fugiat harum in incidunt labore laudantium magni, molestias natus nesciunt, nulla optio praesentium ratione recusandae reprehenderit ut vitae voluptatibus! Cum dicta impedit inventore quia soluta. Aliquam asperiores assumenda aut autem, consectetur delectus deserunt distinctio dolore dolores dolorum eos, excepturi explicabo fugiat incidunt ipsum nesciunt nostrum praesentium quasi quisquam ratione, rem saepe velit vitae voluptates voluptatum. Aut eius, exercitationem fugit non repellat saepe. Amet at delectus, ea impedit laborum quis quos. Adipisci modi odio porro sint. Animi corporis debitis optio quod repudiandae tempora. Commodi dicta ea earum eligendi exercitationem fugiat illum mollitia nisi possimus quaerat quia quis recusandae reiciendis, sit sunt tempora, totam ut vel vitae voluptates! A amet fugit ipsa ipsum molestiae perferendis reprehenderit rerum sed vel voluptates! Aliquid assumenda, beatae consectetur cum distinctio exercitationem fuga, fugiat illo labore laboriosam libero magnam minus molestiae nam necessitatibus nobis possimus rem repellat repellendus sunt unde veniam veritatis vero voluptatibus voluptatum. Aspernatur consequatur, debitis earum eius eum ex excepturi expedita ipsum libero magnam modi nam necessitatibus nemo neque odio omnis pariatur porro provident quae sapiente sint soluta tempore temporibus, vero voluptatibus. A modi nobis ratione repellendus temporibus vitae voluptas. Accusamus architecto beatae blanditiis deleniti deserunt, doloremque earum enim eveniet fuga ipsum laboriosam libero, magnam numquam possimus quae qui quibusdam repellendus saepe, veritatis vitae voluptate voluptates voluptatibus! Accusantium assumenda beatae cum cumque cupiditate, delectus dicta, dignissimos eveniet illo labore magnam minima minus mollitia nemo praesentium quas quibusdam quod sed sunt tenetur? Adipisci asperiores aspernatur blanditiis culpa doloremque et explicabo facere illo impedit inventore magnam maxime mollitia neque nobis omnis placeat quam quasi, quibusdam repellat repudiandae similique sit suscipit! Aperiam impedit ipsum qui quibusdam sint totam. Accusantium aliquid at, distinctio eius, ipsa iste itaque minus molestias, perspiciatis quo reprehenderit sed. Alias aliquid atque cupiditate delectus deleniti earum explicabo quaerat quos repudiandae saepe. Deleniti deserunt ea, eligendi excepturi non quaerat quis! Alias, distinctio?",image:t(3965)},{title:"Филиалы “ЕПУК” 3",description:"Praesent commodo cursus magna, vel scelerisque nisl consectetur.",image:t(9736)}],activeIndex:0}},methods:{prevSlide(){this.activeIndex=0===this.activeIndex?this.data.length-1:this.activeIndex-1},nextSlide(){this.activeIndex=this.activeIndex===this.data.length-1?0:this.activeIndex+1}}};const J=(0,L.A)(Q,[["render",K],["__scopeId","data-v-4dee0818"]]);var N=J;function Z(e,i,t,u,o,n){const r=(0,a.g2)("more"),l=(0,a.g2)("CardGrid"),m=(0,a.g2)("sections");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(m,null,{title:(0,a.k6)((()=>[(0,a.eW)((0,s.v_)(n.firstTitle),1)])),"title-button":(0,a.k6)((()=>[(0,a.bF)(r,{onClick:n.goToFamousPersons,title:n.firstButtonsTitle},null,8,["onClick","title"])])),content:(0,a.k6)((()=>[(0,a.bF)(l,{cards:t.data},null,8,["cards"])])),btn:(0,a.k6)((()=>[(0,a.bF)(r,{title:n.firstButtonsTitle,onClick:n.goToFamousPersons},null,8,["title","onClick"])])),_:1})])}t(4114);var Y=t(3185),V=t(1735),ee={name:"PopularPersons",components:{CardGrid:V.A,More:Y.A,Sections:k.A},props:{data:{type:Object,required:!0}},data(){return{title:"Известные личности",cards:[{id:1,category:"Category 1",heading:"Example Card Heading 1",image:"https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"},{id:2,category:"Category 2",heading:"Example Card Heading 2",image:"https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},{id:3,category:"Category 3",heading:"Example Card Heading 3",image:"https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},{id:4,category:"Category 4",heading:"Example Card Heading 4",image:"https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}]}},methods:{goToFamousPersons(){this.$router.push("/famous-persons")}},computed:{firstTitle(){return this.data.find((e=>e.title))?.title||null},firstButtonsTitle(){return this.data.find((e=>e.buttons_title))?.buttons_title||null}}};const ie=(0,L.A)(ee,[["render",Z]]);var te=ie;const ae={class:"image-grid"},se=["src","alt"];function ue(e,i,t,u,o,n){const r=(0,a.g2)("sections");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(r,null,{title:(0,a.k6)((()=>i[0]||(i[0]=[(0,a.eW)("Организации")]))),content:(0,a.k6)((()=>[(0,a.Lk)("section",ae,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.games,((e,i)=>((0,a.uX)(),(0,a.CE)("div",{key:i,class:(0,s.C4)(["grid-item",{"top-item":i<2,"bottom-item":i>=2}])},[(0,a.Lk)("img",{src:e.image,alt:e.title},null,8,se)],2)))),128))])])),_:1})])}var oe={name:"YouthOrganization",components:{Sections:k.A},data(){return{games:[{image:t(9736),title:"Организация 'Текст'",description:"Единый портал Узбекистана..."},{image:t(9736),title:"Другая организация",description:"Описание другой организации..."},{image:t(9736),title:"Третья организация",description:"Описание третьей организации..."},{image:t(9736),title:"Третья организация",description:"Описание третьей организации..."},{image:t(9736),title:"Третья организация",description:"Описание третьей организации..."}],expandedIndex:null}},methods:{onMoreInfo(e){console.log(`Подробнее о карточке с ID: ${e}`)},toggleExpand(e){this.expandedIndex=this.expandedIndex===e?null:e},showMore(e){alert(`More details about ${e.title}`)}}};const ne=(0,L.A)(oe,[["render",ue],["__scopeId","data-v-f2be6ac4"]]);var re=ne;const le={class:"content"},me={class:"ed"},de={style:{display:"flex","flex-direction":"column",gap:"2rem"}},ce={class:"title font-gilroy"},pe={class:"text"},qe={class:"btn"},ve={class:"sp"},be={style:{display:"flex","flex-direction":"column",gap:"2rem"}},ge={class:"title font-gilroy"},he={class:"text"},fe={class:"btn"};function ke(e,i,t,u,o,n){const r=(0,a.g2)("buttonBasic"),l=(0,a.g2)("sections");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(l,null,{content:(0,a.k6)((()=>[(0,a.Lk)("div",le,[(0,a.Lk)("div",me,[i[0]||(i[0]=(0,a.Lk)("div",{class:"icon"},[(0,a.Lk)("svg",{width:"205",height:"165",viewBox:"0 0 205 165",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,a.Lk)("path",{d:"M77.7307 76.4656L59.6196 81.3184C56.2854 82.2118 54.3068 85.6389 55.2001 88.9731L81.082 185.566C81.9754 188.9 85.4025 190.878 88.7367 189.985L106.848 185.132C110.182 184.239 112.161 180.812 111.267 177.478L85.3853 80.885C84.4919 77.5508 81.0648 75.5722 77.7307 76.4656Z",stroke:"#EBEEF0","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.Lk)("path",{d:"M156.212 55.4363L138.101 60.2891C134.767 61.1825 132.788 64.6096 133.682 67.9438L159.563 164.536C160.457 167.871 163.884 169.849 167.218 168.956L185.329 164.103C188.663 163.21 190.642 159.782 189.749 156.448L163.867 59.8557C162.973 56.5215 159.546 54.5429 156.212 55.4363Z",stroke:"#EBEEF0","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.Lk)("path",{d:"M167.102 71.9297L185.213 67.0768C186.814 66.6478 188.52 66.8724 189.956 67.7012C191.391 68.53 192.439 69.8951 192.868 71.4962L209.044 131.867C209.473 133.468 209.248 135.174 208.42 136.609C207.591 138.045 206.226 139.092 204.625 139.521L186.513 144.374",stroke:"#EBEEF0","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.Lk)("path",{d:"M77.8469 173.492L59.7358 178.344C58.1347 178.773 56.4287 178.549 54.9932 177.72C53.5577 176.891 52.5102 175.526 52.0812 173.925L35.905 113.555C35.476 111.953 35.7005 110.248 36.5294 108.812C37.3582 107.376 38.7233 106.329 40.3244 105.9L58.4355 101.047",stroke:"#EBEEF0","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.Lk)("path",{d:"M98.3264 129.181L146.623 116.24",stroke:"#EBEEF0","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.Lk)("path",{d:"M200.956 101.682L213.03 98.4464",stroke:"#EBEEF0","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.Lk)("path",{d:"M31.9189 146.975L43.993 143.74",stroke:"#EBEEF0","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),(0,a.Lk)("div",de,[(0,a.Lk)("div",ce,(0,s.v_)(t.data_ed.title),1),(0,a.Lk)("div",pe,(0,s.v_)(t.data_ed.full_desc),1),(0,a.Lk)("div",qe,[(0,a.bF)(r,{title_button:t.data_ed.buttons_title,"is-blue":!0},null,8,["title_button"])])])]),(0,a.Lk)("div",ve,[i[1]||(i[1]=(0,a.Lk)("div",{class:"icon"},[(0,a.Lk)("svg",{width:"205",height:"165",viewBox:"0 0 205 165",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,a.Lk)("path",{d:"M25.4485 122.827L103.063 50.2665L206.56 74.2985L128.945 146.859L25.4485 122.827Z",stroke:"#EBEEF0","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.Lk)("path",{d:"M190.399 195.097L167.752 110.579L116.004 98.5625",stroke:"#EBEEF0","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"}),(0,a.Lk)("path",{d:"M188.443 91.2039L199.483 132.407C199.821 133.69 199.731 135.049 199.226 136.277C195.99 144.423 181.19 174.918 139.459 186.1C97.7284 197.281 69.6647 178.272 62.7888 172.835C61.7377 172.024 60.9801 170.893 60.6311 169.612L49.5908 128.409",stroke:"#EBEEF0","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),(0,a.Lk)("div",be,[(0,a.Lk)("div",ge,(0,s.v_)(t.data_sp.title),1),(0,a.Lk)("div",he,(0,s.v_)(t.data_sp.full_desc),1),(0,a.Lk)("div",fe,[(0,a.bF)(r,{title_button:t.data_sp.buttons_title,"is-blue":!0},null,8,["title_button"])])])])])])),_:1})])}var Ae=t(4037),xe={name:"EducationAndSport",components:{Sections:k.A,buttonBasic:Ae.A},props:{data_ed:{type:Object,required:!0},data_sp:{type:Object,required:!0}},data(){return{title_btn:"подробнее",title_ed:"Образование",title_sp:"Спорт",subTitle_ed:"Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы. Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы.",subTitle_sp:"Идея создания и разработка данного Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis ipsum necessitatibus placeat vel? Aliquam asperiores consequatur distinctio labore molestiae non nulla numquam qui similique voluptate. Ab aliquid blanditiis consequatur eius error et fugit illum laboriosam laborum maiores nesciunt, quae quaerat quas quo quos sint sit ut voluptate? Dolore, ipsum! Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы. Идея создания и разработка данного Портала принадлежит председателю узбекского этнокультурного центра города Астана Ш.Пулатову при непосредственной поддержки спонсоров и партнеров из числа ниже указанных компаний и организаций. Отельную благодарность выражаем этнокультурному центру города Алматы в лице председателя А.Исматуллаева за поддержку и выражение солидарности в воплощении данной инициативы.",color:"#000"}}};const Le=(0,L.A)(xe,[["render",ke],["__scopeId","data-v-fb0e1988"]]);var Ce=Le;const _e={class:"content"},ye={class:"text-container"},Ee={class:"title font-gilroy"},we={class:"text"},Fe={class:"btn"},Ie={style:{display:"flex",gap:"1rem"}},Be={class:"image-container"},Se=["src"];function We(e,i,t,u,o,n){const r=(0,a.g2)("basic-button"),l=(0,a.g2)("left"),m=(0,a.g2)("right");return(0,a.uX)(),(0,a.CE)("div",_e,[(0,a.Lk)("div",ye,[(0,a.Lk)("div",Ee,(0,s.v_)(t.data.title),1),(0,a.Lk)("div",we,(0,s.v_)(t.data.mini_desc),1),(0,a.Lk)("div",Fe,[(0,a.bF)(r,{title_button:t.data.buttons_title,"is-blue":!0,onClick:n.goToDonate},null,8,["title_button","onClick"]),(0,a.Lk)("div",Ie,[(0,a.bF)(l),(0,a.bF)(m)])])]),(0,a.Lk)("div",Be,[(0,a.Lk)("img",{src:t.data.image,alt:"help",class:"responsive-image"},null,8,Se)])])}var De={name:"Help",components:{BasicButton:Ae.A,Right:X.A,Left:T.A},props:{data:{type:Object,required:!0}},data(){return{title:"Помощь нуждающимся",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis consectetur nisi, vel bibendum arcu. Nulla facilisi. Sed condimentum, neque vel bibendum fermentum, lectus massa eleifend ex, vel sagittis nisi arcu ac arcu.",bth_title:"подробнее"}},methods:{goToDonate(){this.$router.push("/donates")}}};const Me=(0,L.A)(De,[["render",We],["__scopeId","data-v-73c16880"]]);var Te=Me,Xe=t(3173),je=t(782),Oe={name:"AboutUs",components:{Help:Te,EducationAndSport:Ce,YouthOrganization:re,PopularPersons:te,CultureAndTraditions:N,OurHistory:H,WhoWeaAre:_,Sections:k.A},data(){return{sections:["кто мы","наша история","культура","личности","молодежные организации","образование и спорт","помощь"],currentSection:0,who_we_are:{},our_history:[],culture:[],famous:[],ed:{},sp:{},help:{}}},computed:{...(0,je.L8)(["currentLanguage"])},watch:{currentLanguage(e){this.getAboutUs()}},mounted(){this.getAboutUs();const e=new IntersectionObserver(this.handleIntersection,{threshold:.3}),i=document.querySelectorAll(".section");i.forEach((i=>e.observe(i)))},methods:{handleIntersection(e){for(const i of e)if(i.isIntersecting){const e=i.target.id.split("-")[1];isNaN(e)||(this.currentSection=parseInt(e))}},getAboutUs(){Xe.A.get(`/informations/?lang_code=${this.currentLanguage}`,{headers:{"ngrok-skip-browser-warning":"true"}}).then((e=>{const i=e.data;this.who_we_are=i.find((e=>10===e.category_id))||{},this.our_history=i.filter((e=>11===e.category_id))||[],this.culture=i.filter((e=>4===e.category_id))||[],this.famous=i.filter((e=>5===e.category_id))||[],this.ed=i.find((e=>13===e.category_id))||{},this.sp=i.find((e=>14===e.category_id))||{},this.help=i.find((e=>15===e.category_id))||{},console.log("Данные загружены и распределены по секциям")})).catch((e=>{console.error("Ошибка при загрузке данных:",e)}))}}};const He=(0,L.A)(Oe,[["render",f],["__scopeId","data-v-4ecbc72e"]]);var Pe=He},7217:function(e,i,t){e.exports=t.p+"img/2.06ba295e.png"},9736:function(e,i,t){e.exports=t.p+"img/3.b8b003df.png"},3965:function(e,i,t){e.exports=t.p+"img/4.90471497.png"}}]);
//# sourceMappingURL=103.292656ab.js.map