import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokeInfoDex.css'
import Menu from "../components/PokedexPage/Menu"
import Stats from "../components/PokeInfoDex/Stats"


const PokeInfoDex = () => {

  const { name } = useParams()

  const [pokemon, getpokemon] = useFetch()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    getpokemon(url)

  }, [name])

  const navigate = useNavigate()

  const handleReturn = (e) => {
    e.preventDefault()
    navigate('/pokedex')
  }
  
  const height_m = (data) => {
    const value = data?.height
    const height = value/10
    return height
  }

  const weight_kg= (data) => {
    const value = data?.height
    const weight = value/10
    return weight
  }

  const data_stats = {
    hp: pokemon?.stats['0'].base_stat,
    attack: pokemon?.stats['1'].base_stat,
    defence: pokemon?.stats['2'].base_stat,
    specialAttack: pokemon?.stats['3'].base_stat,
    specialDefense: pokemon?.stats['4'].base_stat,
    speed: pokemon?.stats['5'].base_stat,
  }

  const types_ES = {
    normal: 'Normal',
    fighting: 'Lucha',
    flying: 'Volador',
    poison: 'Veneno',
    ground: 'Tierra',
    rock: 'Roca',
    bug: 'Bicho',
    ghost: 'Fantasma',
    steel: 'Acero',
    fire: 'Fuego',
    water: 'Agua',
    grass: 'Planta',
    electric: 'Eléctrico',
    psychic: 'Psíquico',
    ice: 'Hielo',
    dragon: 'Dragón',
    dark: 'Siniestro',
    fairy: 'Hada',
    stellar: 'Estelar',
    unknown: 'Desconocido',
    shadow: 'Sombra'
  }

  const abilities_ES ={
    stench:'hedor',
  drizzle:'llovizna',
  'speed-boost':'aumento de velocidad',
  'battle-armor':'armadura de batalla',
  sturdy:'robusto',
  damp:'húmedo',
  limber:'ágil',
  'sand-veil':'velodearena',
  static:'estático',
  'volt-absorb':'absorción de voltios',
  'water-absorb':'absorber agua',
  oblivious:'inadvertido',
  'cloud-nine':'nube nueve',
  'compound-eyes':'ojos compuestos',
  insomnia:'insomnio',
  'color-change':'cambio de color',
  immunity:'inmunidad',
  'flash-fire':'incendio repentino',
  'shield-dust':'polvo de escudo',
  'own-tempo':'propio ritmo',
  'suction-cups':'ventosas',
  intimidate:'intimidar',
  'shadow-tag':'etiqueta sombra',
  'rough-skin':'Piel áspera',
  'wonder-guard':'guardia maravilla',
  levitate:'levitación',
  'effect-spore':'efecto espora',
  synchronize:'sincronizar',
  'clear-body':'cuerpo claro',
  'natural-cure':'cura natural',
  'lightning-rod':'Pararrayos',
  'serene-grace':'gracia serena',
  'swift-swim':'nado veloz',
  chlorophyll:'clorofila',
  illuminate:'iluminar',
  trace:'rastro',
  'huge-power':'enorme poder',
  'poison-point':'punto de veneno',
  'inner-focus':'enfoque interno',
  'magma-armor':'armadura magma',
  'water-veil':'velo de agua',
  'magnet-pull':'atracción magnética',
  soundproof:'insonorizar',
  'rain-dish':'plato de lluvia',
  'sand-stream': 'corriente de arena',
  pressure:'presión',
  'thick-fat':'Grasa gruesa',
  'early-bird':'madrugador',
  'flame-body':'cuerpo de llama',
  'run-away':'huir',
  'keen-eye':'buen ojo',
  'hyper-cutter':'hiper cortador',
  pickup:'levantar',
  truant:'ausente',
  hustle:'ajetreo',
  'cute-charm':'lindo encanto',
  plus:'más',
  minus:'menos',
  forecast:'pronóstico',
  'sticky-hold':'agarre pegajoso',
  'shed-skin':'mudar piel',
  guts:'vísceras',
  'marvel-scale':'escala maravilla',
  'liquid-ooze':'líquido',
  overgrow:'crecer demasiado',
  blaze:'resplandor',
  torrent:'torrente',
  swarm:'enjambre',
  'rock-head':'cabeza de piedra',
  drought:'sequía',
  'arena-trap':'trampa de arena',
  'vital-spirit':'espíritu vital',
  'white-smoke':'humoblanco',
  'pure-power':'pura potencia',
  'shell-armor':'armadura',
  'air-lock':'burbuja de aire',
  'tangled-feet':'pies enredados',
  'motor-drive':'motorizado',
  rivalry:'rivalidad',
  steadfast:'firme',
  'now-cloak':'capa de nieve',
  gluttony:'glotonería',
  'anger-point':'punto de ira',
  unburden:'desahogarse',
  heatproof:'resistente al calor',
  simple:'simple',
  'dry-skin':'piel seca',
  download:'descargar',
  'iron-fist':'Puñode Hierro',
  'poison-heal':'curar veneno',
  adaptability:'adaptabilidad',
  'skill-link':'enlace de habilidad',
  hydration:'hidratación',
  'solar-power':'energía solar',
  'quick-feet':'pies rápidos',
  normalize:'normalizar',
  sniper:'francotirador',
  'magic-guard':'guardia mágica',
  'no-guard':'sin guardia',
  stall:'parar',
  technician:'técnico',
  'leaf-guard':'protector de hojas',
  klutz:'torpe',
  'mold-breaker':'rompe moldes',
  'super-luck':'super suerte',
  aftermath:'secuelas',
  anticipation:'anticipación',
  forewarn:'prevenir',
  unaware:'inconsciente',
  'tinted-lens':'lentes tintados',
  filter:'filtrar',
  'slow-start':'comienzo lento',
  scrappy:'deshilvanado',
  'storm-drain':'desagüe pluvial',
  'ice-body':'cuerpo d ehielo',
  'solid-rock':'Rocasólida',
  'snow-warning':'aviso de nieve',
  'honey-gather':'recolectar miel',
  frisk:'cacheo',
  reckless:'imprudente',
  multitype:'multitipo',
  'flower-gift':'regalo de flores',
  'bad-dreams':'sueños malos',
  pickpocket:'carterista',
  'sheer-force':'la fuerza bruta',
  contrary:'contrario',
  unnerve:'enervar',
  defiant:'desafiante',
  defeatist:'derrotista',
  'cursed-body':'cuerpo maldito',
  healer:'curador',
  'friend-guard':'amigo guardia',
  'weak-armor':'armadura débil',
  'heavy-metal':'Metal pesado',
  'light-metal':'metal ligero',
  multiscale:'multiescala',
  'toxic-boost':'impulso tóxico',
  'flare-boost':'aumento de llamarada',
  harvest:'cosecha',
  telepathy:'telepatía',
  moody:'malhumorado',
  overcoat:'sobretodo',
  'poison-touch':'toque venenoso',
  regenerator:'regenerador',
  'big-pecks':'grandes picotazos',
  'sand-rush':'fiebre de arena',
  'wonder-skin':'piel maravillosa',
  analytic:'analítico',
  illusion:'espejismo',
  imposter:'impostor',
  infiltrator:'infiltrado',
  mummy:'momia',
  moxie:'moxie',
  justified:'justificado',
  rattled:'sacudido',
  'magic-bounce':'rebote mágico',
  'sap-sipper':'bebedor de savia',
  prankster:'bromista',
  'sand-force':'fuerza de arena',
  'iron-barbs':'púas de hierro',
  'zen-mode':'modozen',
  'victory-star':'estrella de la victoria',
  turboblaze:'turbofuerte',
  teravolt:'teravoltio',
  'aroma-veil':'velo aromático',
  'flower-veil':'velo de flores',
  'cheek-pouch':'bolsa de mejilla',
  protean:'proteico',
  'fur-coat':'abrigo de piel',
  magician:'mago',
  bulletproof:'apruebadebalas',
  competitive:'competitivo',
  'strong-jaw':'mandíbula fuerte',
  refrigerate:'refrigerar',
  'sweet-veil':'dulcevelo',
  'stance-change':'cambio de postura',
  'gale-wings':'alas de vendaval',
  'mega-launcher':'mega lanzador',
  'grass-pelt':'piel de hierba',
  symbiosis:'simbiosis',
  'tough-claws':'garrasduras',
  pixilate:'pixilar',
  gooey:'pegajoso',
  aerilate:'airear',
  'parental-bond':'vínculo paternal',
  'dark-aura':'aura oscura',
  'fairy-aura':'aura de hada',
  'aura-break':'ruptura de aura',
  'primordial-sea':'mar primordial',
  'desolate-land':'tierra desolada',
  'delta-stream':'corriente delta',
  stamina:'aguante',
  'wimp-out':'cobarde',
  'emergency-exit':'salida de emergencia',
  'water-compaction':'compactación de agua',
  merciless:'despiadado',
  'shields-down':'escudos abajo',
  stakeout:'Estaca',
  'water-bubble':'burbuja de agua',
  steelworker:'trabajadorsiderúrgico',
  berserk:'enloquecido',
  'slush-rush':'agua nieve',
  'long-reach':'de largo alcance',
  'liquid-voice':'voz liquida',
  triage:'triaje',
  galvanize:'galvanizar',
  'surge-surfer':'surfista',
  schooling:'enseñanza',
  disguise:'ocultar',
  'battle-bond':'vínculo de batalla',
  'power-construct':'construcción de poder',
  corrosion:'corrosión',
  comatose:'comatoso',
  'queenly-majesty':'majestad reina',
  'innards-out':'adentro hacia afuera',
  dancer:'bailarín',
  battery:'batería',
  fluffy:'esponjoso',
  dazzling:'deslumbrante',
  'soul-heart':'corazón del alma',
  'tangling-hair':'pelo enredado',
  receiver:'receptor',
  'power-of-alchemy':'poder de la alquimia',
  'beast-boost':'impulso bestia',
  'rks-system':'sistema rks',
  'electric-surge':'sobretensión eléctrica',
  'psychic-surge':'oleada psíquica',
  'misty-surge':'oleada brumosa',
  'grassy-surge':'oleada de hierba',
  'full-metal-body':'cuerpo totalmente metálico',
  'shadow-shield':'escudo de sombra',
  'prism-armor':'armadura prisma',
  neuroforce:'neuro fuerza',
  'intrepid-sword':'espada intrepida',
  'dauntless-shield':'escudo intrépido',
  libero:'líbero',
  'ball-fetch':'buscar la pelota',
  'cotton-down':'algodón',
  'propeller-tail':'cola de hélice',
  'mirror-armor':'armadura de espejo',
  'gulp-missile':'misil de trago',
  stalwart:'leal',
  'steam-engine':'máquina de vapor',
  'punk-rock':'punkrock',
  'sand-spit':'Escupir arena',
  'ice-scales':'escamas de hielo',
  ripen:'madurar',
  'ice-face':'cara de hielo',
  'power-spot':'punto de poder',
  mimicry:'mimetismo',
  'screen-cleaner':'limpiador de pantalla',
  'steely-spirit':'espíritu de acero',
  'perish-body':'perecer cuerpo',
  'wandering-spirit':'espíritu errante',
  'gorilla-tactics':'tácticas de gorila',
  'neutralizing-gas':'gas neutralizante',
  'pastel-veil':'velo pastel',
  'hunger-switch':'interruptor de hambre',
  'quick-draw':'dibujo rapido',
  'unseen-fist':'puño invisible',
  'curious-medicine':'medicina curiosa',
  transistor:'transistor',
  'dragons-maw':'fauces de dragones',
  'chilling-neigh':'relincho escalofriante',
  'grim-neigh':'relincho sombrío',
  'as-one-glastrier':'como un glastrier',
  'as-one-spectrier':'como un espectro',
  'lingering-aroma':'aroma persistente',
  'seed-sower':'sembrador de semillas',
  'thermal-exchange':'intercambio térmico',
  'anger-shell':'caparazón de ira',
  'purifying-salt':'sal purificante',
  'well-baked-body':'cuerpo bien cocido',
  'wind-rider':'jinete del viento',
  'guard-dog':'perro guardian',
  'rocky-payload':'carga útil rocosa',
  'wind-power':'energía eólica',
  'zero-to-hero':'cero héroe',
  commander:'comandante',
  electromorphosis:'electromorfosis',
  protosynthesis:'protosíntesis',
  'quark-drive':'impulsor de quarks',
  'good-as-gold':'bueno como el oro',
  'vessel-of-ruin':'recipiente de la ruina',
  'sword-of-ruin':'espada de la ruina',
  'tablets-of-ruin':'tabletas de ruina',
  'beads-of-ruin':'cuentas de ruina',
  'orichalcum-pulse':'pulso de oricalco',
  'hadron-engine':'motor de hadrones',
  opportunist:'oportunista',
  'cud-chew':'masticar',
  sharpness:'nitidez',
  'supreme-overlord':'señor supremo',
  costar:'coestrella',
  'toxic-debris':'desechos tóxicos',
  'armor-tail':'cola de armadura',
  'earth-eater':'devorador de tierra',
  'mycelium-might':'micelio poder',
  'minds-eye':'el ojo de la mente',
  'supersweet-syrup':'jarabe superdulce',
  hospitality:'hospitalidad',
  'toxic-chain':'cadena toxica',
  'embody-aspect':'aspecto encarnación',
  'tera-shift':'cambio tera',
  'tera-shell':'tera cáscara',
  'teraform-zero':'teraforma-cero',
  'poison-puppeteer':'titiritero venenoso',
  mountaineer:'alpinista',
  'wave-rider':'montador de olas',
  skater:'patinador',
  thrust:'empuje',
  perception:'percepción',
  parry:'parar',
  instinct:'instinto',
  dodge:'esquivar',
  'jagged-edge':'borde dentado',
  frostbite:'congelación',
  tenacity:'tenacidad',
  pride:'orgullo',
  'deep-sleep':'sueño profundo',
  'power-nap':'Siesta de poder',
  spirit:'espíritu',
  'warm-blanket':'manta caliente',
  gulp:'trago',
  herbivore:'herbívoro',
  sandpit:'mina de arena',
  'hot-blooded':'sangre caliente',
  medic:'médico',
  'life-force':'fuerza de vida',
  lunchbox:'caja de almuerzo',
  nurse:'enfermero',
  melee:'pelea confusa',
  sponge:'esponja',
  bodyguard:'guarda espaldas',
  hero:'héroe',
  'last-bastion':'último bastión',
  stealth:'sigilo',
  vanguard:'vanguardia',
  nomad:'nómada',
  sequence:'secuencia',
  'grass-cloak':'capa de hierba',
  celebrate:'celebrar',
  lullaby:'cancióndecuna',
  calming:'calmante',
  daze:'aturdimiento',
  frighten:'asustar',
  interference:'interferencia',
  'mood-maker':'humorista',
  confidence:'confianza',
  fortune:'fortuna',
  bonanza:'bonanza',
  explode:'explotar',
  omnipotent:'omnipotente',
  share:'compartir',
  'black-hole':'agujero negro',
  'shadow-dash':'tablero de sombra',
  sprint:'pique',
  disgust:'asco',
  'high-rise':'Alto',
  climber:'trepador',
  'flame-boost':'aumento de llama',
  'aqua-boost':'impulso acuático',
  'run-up':'período previo',
  conqueror:'conquistador',
  shackle:'encadenar',
  decoy:'señuelo',
  shield:'blindaje',
  }
  // console.log(data_stats.hp, data_stats.attack, data_stats.defence, data_stats.specialAttack, data_stats.specialDefense, data_stats.speed)

  // console.log(pokemon)
  // console.log(height_m(pokemon))

  return (
    <div className="container_info_pokemon">
      <div className="header_info_page">
        <Menu/>
      </div>
      <div className="body_info_page">
        <div className="container_stats">
          <div className="card_stats1">
            <div className="card_stats_color_back"></div>
            <div className="card_stats_color_front">
              <div className="color_front"></div>
            </div>
            <div className="card_stats_content">
              <div className="logo_pokemon_card"></div>
              <img className="pokemon_frame" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
              <h2 className="pokemon_name">{pokemon?.name}</h2>
              <hr className="rule_line" />
              <div className="phisical_stats">
                <div className="stats_height">
                  <p className="title_stat">Altura</p>
                  <p className="value_stat">{height_m(pokemon)} m</p>
                </div>
                <div className="stats_weight">
                  <p className="title_stat">Peso</p>
                  <p className="value_stat">{weight_kg(pokemon)} kg</p>
                </div>
              </div>
              <div className="container_stats_details">
                <div className="type_pokemon">
                  <div className="label_pokemon">
                    <p>Habilidades</p>
                  </div>
                  <div className="type_type">
                    {
                        pokemon?.abilities.map(ability => (
                          
                          <p className="label_styles1" key={ability.ability.url}>{abilities_ES[ability.ability.name] || ability.ability.name}</p>
                        ))
                    }

                  </div>
                </div>

                <div className="ability_pokemon">
                  <div className="label_pokemon">
                      <p>Tipo</p>
                    </div>
                    <div className="ability_ability">
                      {
                        pokemon?.types.map( type => (

                          <p className="label_styles2" key={type.type.url}>{types_ES[type.type.name] || type.type.name}</p>
                        ))
                      }
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card_stats2">
            <div className="header_stats_values">
              <div className="header_grid">
                <p className="title_stats"><i class="fa-solid fa-chart-bar"></i>&nbsp;Estadísticas&nbsp;</p>
                <hr className="hr_stats" />
              </div>
            </div>
            <div className="stats_details">
              <Stats
              data = {data_stats}
              />
            </div>
          </div>
          <div className="card_stats3">
            <div className="header_move_values">
              <div className="header_grid_move">
                <p className="title_move"><i class="fa-solid fa-bookmark"></i>&nbsp;Movimientos&nbsp;</p>
                <hr className="hr_move" />
              </div>
            </div>
            
            <div className="move_details">
              {
                pokemon?.moves.map(statInfo => (
                  <p className="info_move_list" key={statInfo.move.url}>{statInfo.move.name}</p>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="footer_info_page">
        <div className="footer_navigate">
          <button className="button_back" onClick={handleReturn}>Regresar</button>
        </div>
      </div>
    </div>
  )
}

export default PokeInfoDex