export interface Faq {
	q: string;
	a: string;
}

export interface Feature {
	icon: string;
	title: string;
	body: string;
}

export interface HomeContent {
	title: string;
	description: string;
	hero: {
		eyebrow: string;
		titlePrefix: string;
		titleHighlight: string;
		titleSuffix: string;
		body: string;
	};
	featuresEyebrow: string;
	features: Feature[];
	about: {
		eyebrow: string;
		h2: string;
		p1: string;
		p2: string;
		h3Comfort: string;
		p3: string;
		p4: string;
		h3International: string;
		p5: string;
		p6: string;
		h3Details: string;
		p7: string;
		p8: string;
		h3Share: string;
		p9: string;
		h3Who: string;
		p10: string;
		p11Before: string;
		linkCalculator: string;
		p11Mid1: string;
		linkConverter: string;
		p11Mid2: string;
		linkWorldClock: string;
		p11After: string;
	};
	faqEyebrow: string;
	faqH2: string;
	faqs: Faq[];
}

export const homeContent: Record<string, HomeContent> = {
	es: {
		title: 'Planificador de Reuniones — Encuentra la Mejor Hora para Reunirte Entre Zonas Horarias',
		description:
			'Planificador de reuniones y reloj mundial gratuito para programar entre zonas horarias. Compara horarios laborales entre ciudades, obtén una Puntuación de Comodidad para cada franja y comparte al instante la mejor hora de reunión global.',
		hero: {
			eyebrow: 'Planificador de reuniones para zonas horarias',
			titlePrefix: 'El ',
			titleHighlight: 'planificador de reuniones',
			titleSuffix: ' que encuentra la mejor hora para reunirse, sin importar dónde esté cada uno',
			body: 'Añade cada ciudad, define el horario laboral o de vigilia de cada persona, y deja que la Puntuación de Comodidad encuentre la hora que realmente es buena para todos — no solo técnicamente posible.',
		},
		featuresEyebrow: 'Por qué esto es mejor que una hoja de cálculo',
		features: [
			{
				icon: '🎯',
				title: 'Puntuación de Comodidad, no solo superposición',
				body: 'Cada hora candidata se califica como Excelente, Buena o Mala según lo conveniente que sea realmente para cada persona — no solo si cae en horas de luz.',
			},
			{
				icon: '♾️',
				title: 'Sin límite de ciudades',
				body: 'Añade tantos participantes como necesites. Sin límite de 12 ciudades, sin recargar la página para añadir una persona más.',
			},
			{
				icon: '🔗',
				title: 'Enlaces para compartir de verdad',
				body: 'Un clic copia un enlace con tus ciudades, fecha y configuración ya incorporadas — sin edición manual de la URL.',
			},
			{
				icon: '🕐',
				title: 'Participantes con nombre, horarios personalizados',
				body: 'Da a cada persona un nombre y su propio horario laboral o de vigilia — no un genérico "Ubicación 1, Ubicación 2".',
			},
		],
		about: {
			eyebrow: 'Sobre esta herramienta',
			h2: 'Un planificador de reuniones creado para cada zona horaria del planeta',
			p1: 'Coordinar una llamada entre tres continentes no debería requerir una hoja de cálculo, cuatro pestañas del navegador y una tabla mental de desfases UTC. Este planificador de reuniones fue creado para reemplazar todo eso con una sola página: añade las ciudades involucradas, y la herramienta muestra inmediatamente qué horas funcionan realmente para todos — no solo las horas teóricamente posibles.',
			p2: 'La mayoría de las llamadas herramientas de planificación de reuniones por zona horaria se quedan en la superposición. Muestran el bloque de horas en que el reloj de cada ciudad marca algo entre las 9 y las 5, y lo dan por terminado. Eso ignora la realidad del trabajo remoto: las 9 AM en una ciudad pueden ser un inicio de jornada perfectamente normal, mientras que la "superposición" de las 5 PM en otra ciudad significa que alguien se une a una llamada después de que sus hijos ya están acostados. Una verdadera herramienta de zona horaria para planificar reuniones necesita tener en cuenta cómo se siente realmente una hora para la persona que la vive, no solo si cae dentro de un genérico horario laboral.',
			h3Comfort: 'Por qué un reloj mundial para planificar reuniones necesita una Puntuación de Comodidad',
			p3: 'Ese es el problema que resuelve esta herramienta con su Puntuación de Comodidad. Cada hora candidata para la reunión se califica como Excelente, Buena o Mala según lo conveniente que sea para cada participante nombrado — teniendo en cuenta su propio horario laboral, sus fines de semana, y si la franja cae temprano en la mañana, tarde en la noche, o justo en medio de un día normal. Añade un colega en Singapur, un cliente en São Paulo y un compañero en Berlín, y en lugar de entrecerrar los ojos ante tres relojes distintos, obtienes una lista clasificada de horas donde la reunión es genuinamente buena para todos, no solo asistible.',
			p4: 'Esto es lo que separa a un verdadero planificador de reuniones de un simple reloj mundial. Un reloj mundial para reuniones que solo indica la hora actual en cada ciudad todavía te deja hacer la comparación tú mismo. Esta herramienta hace la comparación por ti, en tantas ciudades como necesites — no hay límite de 12 ciudades, no se requiere recargar para añadir "solo una más", y no hay límite en cuántas oficinas internacionales estés tratando de alinear.',
			h3International: 'Diseñado como un planificador de reuniones internacional desde el primer día',
			p5: 'Los equipos distribuidos rara vez se mantienen limitados a dos zonas horarias por mucho tiempo, por eso esto se diseñó desde el principio como un planificador de reuniones internacional en lugar de un aparato de dos ciudades añadido después. Añade una cuarta ciudad, una quinta, una décima — la Puntuación de Comodidad se recalcula para todo el grupo al instante. Cada participante también puede tener su propio nombre, así que en lugar de mirar "Ubicación 1" y "Ubicación 2" ves "Priya (Mumbai)" y "Tom (Chicago)", lo que hace mucho más fácil notar de un vistazo la mañana de quién estarías interrumpiendo.',
			p6: 'Para cualquiera que gestione tareas de planificación de reuniones globales — coordinando reuniones diarias en una organización de ingeniería distribuida, sincronizando un equipo de marketing repartido en tres regiones, o simplemente buscando una hora de llamada entre un cliente y una agencia en lados opuestos del planeta — el objetivo es el mismo: minimizar el número de personas que deben aceptar una llamada inconveniente, y hacer evidente qué opción logra eso mejor.',
			h3Details: 'Un planificador de reuniones de zona horaria que maneja los detalles automáticamente',
			p7: 'Las matemáticas de zona horaria tienen más casos límite de los que la mayoría espera, y este planificador los maneja para que tú no tengas que pensar en ellos. Los cambios de horario de verano desplazan el desfase UTC de una ciudad en una hora en fechas que difieren según el país, y el motor de este planificador de reuniones siempre usa el desfase correcto y actual para la fecha que hayas seleccionado — no uno almacenado en caché o aproximado. Cruza una línea de fecha y la calculadora ajusta el día de la semana automáticamente, así que una llamada del viernes por la tarde desde Los Ángeles no se convierte silenciosamente en una petición del sábado por la mañana en Auckland sin que nadie lo note.',
			p8: 'Cada participante también puede configurarse en modo Trabajo o modo Personal. El modo Trabajo se ciñe al horario laboral estándar y respeta los fines de semana; el modo Personal amplía la ventana aceptable para una llamada informal con familia o amigos, usando horas de vigilia en lugar de horario de oficina. Combinado con un control deslizante ajustable de horas aceptables, esto hace que la herramienta sea igualmente útil como planificador de reuniones profesional y como un simple planificador de fecha y hora para uso personal — llamadas de cumpleaños, relaciones a distancia, o alcanzar a un amigo antes de que se vaya a dormir.',
			h3Share: 'Comparte el resultado, no solo la captura de pantalla',
			p9: 'Una vez que encuentres una hora que funcione, el botón "Copiar enlace para compartir" codifica cada ciudad, nombre, configuración de horario laboral y fecha elegida directamente en la URL. Envía ese enlace a un colega o cliente y verá exactamente la misma lista clasificada de horas — sin volver a introducir ciudades, sin explicar qué franja querías decir, sin idas y vueltas por correo tratando de describir una diferencia horaria con palabras. Funciona igual ya sea que estés planificando una llamada puntual o guardando en favoritos una configuración recurrente de zonas horarias de reuniones que uses cada semana.',
			h3Who: 'Para quién es este planificador de reuniones',
			p10: 'Esta herramienta está creada para cualquiera que se pregunte regularmente "¿qué hora es esa para ellos?" — equipos remotos e híbridos repartidos por regiones, reclutadores programando entrevistas con candidatos internacionales, equipos de éxito del cliente que dan soporte a clientes en el extranjero, periodistas coordinando con fuentes en el extranjero, y familias manteniendo el contacto entre países. Si tu trabajo o tu vida cruza aunque sea un límite de zona horaria, un planificador de reuniones dedicado ahorra el esfuerzo mental de hacer esa conversión a mano cada vez.',
			p11Before: 'Más allá del planificador multiciudad de arriba, otras herramientas relacionadas en este sitio cubren necesidades más específicas: una ',
			linkCalculator: 'calculadora de dos ciudades',
			p11Mid1: ' para encontrar rápidamente la mejor hora para llamar a otra persona, un sencillo ',
			linkConverter: 'conversor de zona horaria',
			p11Mid2: ' para comprobar una sola conversión de hora, y un ',
			linkWorldClock: 'reloj mundial',
			p11After: ' en vivo para ver de un vistazo la hora actual en cualquier ciudad. Juntas cubren toda la gama de lo que una herramienta de zona horaria para reuniones debería hacer — desde una comprobación rápida puntual hasta la programación completa de un equipo global y distribuido.',
		},
		faqEyebrow: 'Preguntas frecuentes',
		faqH2: 'Preguntas frecuentes',
		faqs: [
			{
				q: '¿Qué es un planificador de reuniones?',
				a: 'Un planificador de reuniones es una herramienta que encuentra una hora para reunirse o llamar que realmente funciona para todos los involucrados — comparando zonas horarias, horarios laborales y disponibilidad de cada participante, en lugar de dejar que hagas esa matemática a mano. Este además añade una Puntuación de Comodidad, para que veas qué horas son genuinamente convenientes, no solo técnicamente posibles.',
			},
			{
				q: '¿Este planificador de reuniones es realmente gratis?',
				a: 'Sí. Cada herramienta de este sitio — el planificador multiciudad, la calculadora de dos ciudades, el conversor de zona horaria y el reloj mundial — es gratis, sin muro de pago en ninguna función.',
			},
			{
				q: '¿Necesito registrarme o crear una cuenta?',
				a: 'No. No hay ningún sistema de cuentas. Añade tus ciudades, ajusta la configuración, y usa el enlace para compartir para guardar o enviar un resultado — todo funciona sin crear un inicio de sesión.',
			},
			{
				q: '¿Cómo funciona la Puntuación de Comodidad?',
				a: 'Cada hora candidata se califica como Excelente, Buena o Mala para cada participante según su horario laboral o de vigilia, sus fines de semana, y qué tan lejos cae la franja del medio de su día. Una hora solo obtiene una puntuación alta si es genuinamente conveniente para todos, no solo técnicamente dentro del horario laboral para todas las partes.',
			},
			{
				q: '¿La herramienta tiene en cuenta los cambios de horario de verano?',
				a: 'Sí. Las transiciones de horario de verano desplazan el desfase UTC de una ciudad en una hora en fechas distintas según el país, y este planificador siempre calcula usando el desfase actual y correcto para la fecha que hayas seleccionado — nunca uno fijo o aproximado.',
			},
			{
				q: '¿Cuántas ciudades o participantes puedo añadir?',
				a: 'No hay límite. Añade tantas ciudades y participantes nombrados como tu reunión realmente necesite — la Puntuación de Comodidad se recalcula para todo el grupo al instante mientras añades más.',
			},
			{
				q: '¿Puedo compartir la hora de reunión que encuentre con otra persona?',
				a: 'Sí. El botón "Copiar enlace para compartir" codifica tus ciudades, nombres, fecha y configuración directamente en la URL, así que cualquiera a quien se lo envíes ve exactamente el mismo resultado — sin volver a introducir información ni explicar la matemática de zona horaria por correo.',
			},
			{
				q: '¿Se guardan mis datos, y son privados?',
				a: 'Nada se almacena en un servidor ni se vincula a una cuenta — los cálculos ocurren en tu navegador, y el único lugar donde se guarda tu configuración es dentro del propio enlace para compartir, que solo tú decides enviar.',
			},
			{
				q: '¿Cuál es la mejor forma de empezar una reunión cuando todos están en una zona horaria diferente?',
				a: 'Confirma la conversión de zona horaria antes de enviar la invitación, no después — indica la hora de la reunión en la hora local propia de cada asistente en lugar de asumir que todos la convertirán ellos mismos, y empieza a tiempo incluso si la franja cae fuera del horario habitual para un participante, ya que normalmente esa es la persona que hizo el mayor esfuerzo para estar ahí.',
			},
			{
				q: '¿Cuál es la diferencia entre este planificador de reuniones y un simple conversor de zona horaria?',
				a: 'Un conversor solo te dice qué hora es en otro lugar. Este planificador de reuniones clasifica cada hora del día para cada participante a la vez, teniendo en cuenta el horario laboral o de vigilia y los fines de semana de cada persona, así que obtienes una lista corta de horas que realmente vale la pena proponer en lugar de una conversión sin procesar que aún tienes que evaluar tú mismo.',
			},
			{
				q: '¿Funciona esto en el móvil?',
				a: 'Sí — el planificador, la calculadora, el conversor y el reloj mundial son totalmente utilizables en el móvil, sin necesidad de una app separada.',
			},
		],
	},
	ja: {
		title: 'ミーティングプランナー — タイムゾーンをまたいだ最適な会議時間を見つける',
		description:
			'タイムゾーンのスケジューリングのための無料のミーティングプランナーと世界時計。都市間の勤務時間を比較し、各候補時間のコンフォートスコアを取得し、最適なグローバル会議時間を即座に共有できます。',
		hero: {
			eyebrow: 'タイムゾーン・ミーティングプランナー',
			titlePrefix: '',
			titleHighlight: 'ミーティングプランナー',
			titleSuffix: '。全員がどこにいても最適な会議時間を見つけます',
			body: 'すべての都市を追加し、各参加者の勤務時間または起きている時間を設定すれば、コンフォートスコアが単に技術的に可能なだけでなく、本当に全員にとって都合の良い時間を見つけ出します。',
		},
		featuresEyebrow: 'スプレッドシートより優れている理由',
		features: [
			{
				icon: '🎯',
				title: '単なる重なりではなく、コンフォートスコア',
				body: '候補となる各時間は、単に日中かどうかだけでなく、各人にとって実際にどれだけ都合が良いかに基づいて、優秀・良い・悪いで評価されます。',
			},
			{
				icon: '♾️',
				title: '都市数の上限なし',
				body: '必要なだけ参加者を追加できます。12都市の上限もなく、もう一人追加するためにページを再読み込みする必要もありません。',
			},
			{
				icon: '🔗',
				title: '本当に使える共有リンク',
				body: 'ワンクリックで都市、日付、設定がすでに組み込まれたリンクをコピーできます — URLを手動で編集する必要はありません。',
			},
			{
				icon: '🕐',
				title: '名前付き参加者、カスタム時間',
				body: '「場所1、場所2」のような汎用的な表示ではなく、各人に名前と、それぞれの勤務時間や起きている時間を設定できます。',
			},
		],
		about: {
			eyebrow: 'このツールについて',
			h2: '地球上のあらゆるタイムゾーンのために作られたミーティングプランナー',
			p1: '3つの大陸をまたぐ通話を調整するのに、スプレッドシート、4つのブラウザタブ、そしてUTCオフセットの暗算表が必要であってはいけません。このミーティングプランナーは、それらすべてを1つのページに置き換えるために作られました。関係する都市を追加するだけで、理論上可能な時間ではなく、実際に全員にとって都合の良い時間がすぐにわかります。',
			p2: 'いわゆるタイムゾーン・ミーティングプランナーツールの多くは、重なりを見つけるだけで終わってしまいます。各都市の時計が9時から5時の間のどこかを指す時間帯を示して、それで終わりです。それはリモートワークの現実を無視しています。ある都市の午前9時はごく普通の始業時間かもしれませんが、別の都市で「重なっている」午後5時は、子供がすでに寝た後に通話に参加することを意味するかもしれません。本当のタイムゾーン・ミーティングプランナーツールは、単に一般的な勤務時間の枠に収まるかどうかだけでなく、その時間がそれを実際に生きる人にとってどう感じられるかを考慮する必要があります。',
			h3Comfort: '世界時計ミーティングプランナーになぜコンフォートスコアが必要か',
			p3: 'それこそが、このツールがコンフォートスコアで解決する問題です。候補となる各会議時間は、各参加者の勤務時間、週末、そしてその時間帯が朝早くか、夜遅くか、あるいは1日のちょうど真ん中に位置するかに基づいて、優秀・良い・悪いで評価されます。シンガポールの同僚、サンパウロのクライアント、ベルリンのチームメイトを追加すれば、3つの時計を見比べる代わりに、単に出席可能なだけでなく本当に全員にとって都合の良い時間のランク付けされたリストが得られます。',
			p4: 'これが、本当のミーティングプランナーと単なる世界時計を分けるものです。各都市の現在時刻を表示するだけの世界時計ミーティングプランナーでは、比較作業は自分でしなければなりません。このツールは、必要な数の都市について、その比較を代わりに行います — 12都市の上限もなく、「もう一人だけ」追加するための再読み込みも不要で、調整しようとしている国際オフィスの数にも制限はありません。',
			h3International: '最初から国際ミーティングプランナーとして設計',
			p5: '分散したチームが2つのタイムゾーンだけに長くとどまることは稀です。だからこそ、これは後付けの2都市用の道具としてではなく、最初から国際ミーティングプランナーとして設計されました。4番目、5番目、10番目の都市を追加しても、コンフォートスコアはグループ全体について即座に再計算されます。各参加者は個別に名前を付けることもできるので、「場所1」「場所2」を見つめる代わりに「Priya(ムンバイ)」や「Tom(シカゴ)」を見ることになり、誰の朝を邪魔することになるかを一目で把握しやすくなります。',
			p6: '分散したエンジニアリング組織のスタンドアップをスケジュールする、3つの地域にまたがるマーケティングチームを同期させる、あるいは地球の反対側にいるクライアントと代理店の間の通話時間を単に見つける — グローバルなミーティングプランナー業務を管理する人にとって、目標は同じです。不便な通話を受け入れなければならない人の数を最小限に抑え、どの選択肢が最もそれを達成するかを明らかにすることです。',
			h3Details: '細部を自動的に処理するタイムゾーン・ミーティングプランナー',
			p7: 'タイムゾーンの計算には、ほとんどの人が思うよりも多くのエッジケースがあり、このプランナーはそれらを処理するので、あなたが考える必要はありません。サマータイムの切り替えは、国によって異なる日付で都市のUTCオフセットを1時間ずらしますが、このミーティングプランナーのタイムゾーンエンジンは、選択した日付に対して常に正しい現在のオフセットを使用します — キャッシュされた、あるいは近似的なものではありません。日付変更線を越えても、計算ツールは曜日を自動的に調整するので、ロサンゼルスからの金曜午後の通話が、誰も気づかないうちにオークランドでの土曜朝の依頼に静かに変わってしまうことはありません。',
			p8: '各参加者は、仕事モードまたは個人モードに設定することもできます。仕事モードは標準的な勤務時間を守り、週末を尊重します。個人モードは、オフィスの時間ではなく起きている時間を使い、家族や友人とのカジュアルな通話のために許容範囲を広げます。調整可能な許容時間スライダーと組み合わせることで、このツールはプロフェッショナルなミーティングプランナーとしても、誕生日の通話、遠距離恋愛、友人が寝る前に連絡を取るといった個人利用のためのシンプルな日時ミーティングプランナーとしても、同様に役立ちます。',
			h3Share: 'スクリーンショットではなく、結果そのものを共有',
			p9: '都合の良い時間が見つかったら、「共有可能なリンクをコピー」ボタンが、すべての都市、名前、勤務時間の設定、選択した日付を直接URLにエンコードします。そのリンクを同僚やクライアントに送れば、彼らも同じランク付けされた時間のリストを見ることができます — 都市を再入力する必要も、どの枠を意図していたか説明する必要も、メールで時差を言葉で説明しようとする面倒なやり取りも不要です。1回限りの通話を計画する場合でも、毎週使う定期的なミーティングプランナーのタイムゾーン設定をブックマークする場合でも、同じように機能します。',
			h3Who: 'このミーティングプランナーは誰のためのものか',
			p10: 'このツールは、「それは向こうでは何時になるんだろう?」と定期的に自問するすべての人のために作られています — 地域をまたいで広がるリモート・ハイブリッドチーム、海外の候補者との面接をスケジュールするリクルーター、海外のクライアントを支援するカスタマーサクセスチーム、海外の情報源と連携するジャーナリスト、そして国境を越えて連絡を取り合う家族。仕事や生活が1つでもタイムゾーンの境界をまたぐなら、専用のミーティングプランナーは、毎回手作業でその変換を行う精神的な負担を省いてくれます。',
			p11Before: '上記のマルチシティプランナー以外にも、このサイトの関連ツールがより具体的なニーズに対応します:もう一人との最適な通話時間をすばやく見つける',
			linkCalculator: '2都市計算ツール',
			p11Mid1: '、単一の時間変換を確認するシンプルな',
			linkConverter: 'タイムゾーン変換',
			p11Mid2: '、そしてどの都市の現在時刻もひと目で確認できるライブの',
			linkWorldClock: '世界時計',
			p11After: '。これらを合わせると、簡単な単発の確認から、グローバルに分散したチーム全体のスケジューリングまで、タイムゾーン・ミーティングプランナーツールが対応すべき全範囲をカバーします。',
		},
		faqEyebrow: 'よくある質問',
		faqH2: 'よくある質問',
		faqs: [
			{
				q: 'ミーティングプランナーとは何ですか?',
				a: 'ミーティングプランナーとは、タイムゾーン、勤務時間、そして各参加者の都合を比較することで、関係者全員にとって実際にうまくいく会議や通話の時間を見つけるツールです。自分で計算する手間を省きます。このツールはさらにコンフォートスコアを加えることで、単に技術的に可能な時間だけでなく、本当に都合の良い時間を確認できます。',
			},
			{
				q: 'このミーティングプランナーは本当に無料で使えますか?',
				a: 'はい。このサイトのすべてのツール — マルチシティプランナー、2都市計算ツール、タイムゾーン変換、世界時計 — はすべて無料で、どの機能にも課金の壁はありません。',
			},
			{
				q: '登録やアカウント作成は必要ですか?',
				a: 'いいえ。アカウントシステムは一切ありません。都市を追加し、設定を調整し、共有可能なリンクを使って結果を保存または送信するだけです — ログインを作成しなくてもすべて機能します。',
			},
			{
				q: 'コンフォートスコアはどのように機能しますか?',
				a: '候補となる各時間は、各参加者の勤務時間または起きている時間、週末、そしてその時間帯が1日の真ん中からどれだけ離れているかに基づいて、優秀・良い・悪いで評価されます。ある時間が高いスコアを得るのは、単に全員にとって技術的に勤務時間内であるだけでなく、本当に全員にとって都合が良い場合のみです。',
			},
			{
				q: 'このツールはサマータイムの変更を考慮していますか?',
				a: 'はい。サマータイムの切り替えは、国によって異なる日付で都市のUTCオフセットを1時間ずらしますが、このプランナーは常に、選択した日付に対する現在の正しいオフセットを使って計算します — 固定または近似のオフセットは使いません。',
			},
			{
				q: '何都市、何人の参加者まで追加できますか?',
				a: '上限はありません。会議に実際に必要なだけの都市と名前付きの参加者を追加してください — 参加者を追加するたびに、グループ全体のコンフォートスコアが即座に再計算されます。',
			},
			{
				q: '見つけた会議時間を他の人と共有できますか?',
				a: 'はい。「共有可能なリンクをコピー」ボタンは、都市、名前、日付、設定を直接URLにエンコードするので、送った相手も情報を再入力したり、メールでタイムゾーンの計算を説明したりすることなく、まったく同じ結果を見ることができます。',
			},
			{
				q: '私のデータは保存されますか?プライバシーは守られますか?',
				a: 'サーバーには何も保存されず、アカウントにも紐付けられません — 計算はすべてブラウザ内で行われ、あなたの設定が保存される唯一の場所は、共有可能なリンク自体の中だけです。それを送るかどうかはあなた次第です。',
			},
			{
				q: '全員が異なるタイムゾーンにいるとき、会議を始める最良の方法は何ですか?',
				a: '招待状を送る前にタイムゾーンの変換を確認してください、後からではなく。全員が自分で変換すると想定するのではなく、各出席者自身のローカル時間で会議時間を明示してください。そして、ある参加者にとって標準的な時間外であっても定刻に始めてください — なぜなら、その人が通常、参加するために最も大きな譲歩をした人だからです。',
			},
			{
				q: 'このミーティングプランナーと単純なタイムゾーン変換ツールの違いは何ですか?',
				a: '変換ツールは、他の場所が今何時かを教えてくれるだけです。このミーティングプランナーは、各人の勤務時間や起きている時間、週末を考慮しながら、全参加者について1日のすべての時間を同時にランク付けするので、自分で評価しなければならない生の変換結果ではなく、実際に提案する価値のある時間の候補リストが得られます。',
			},
			{
				q: 'これはモバイルでも使えますか?',
				a: 'はい — プランナー、計算ツール、変換ツール、世界時計はすべてモバイルで完全に利用可能で、別途アプリは必要ありません。',
			},
		],
	},
	fr: {
		title: 'Planificateur de Réunions — Trouvez le Meilleur Moment pour se Réunir Entre Fuseaux Horaires',
		description:
			'Planificateur de réunions et horloge mondiale gratuits pour la planification entre fuseaux horaires. Comparez les heures de travail entre villes, obtenez un Score de Confort pour chaque créneau, et partagez instantanément le meilleur horaire de réunion global.',
		hero: {
			eyebrow: 'Planificateur de réunions pour fuseaux horaires',
			titlePrefix: 'Le ',
			titleHighlight: 'planificateur de réunions',
			titleSuffix: ' qui trouve le meilleur moment pour se réunir, où que chacun se trouve',
			body: "Ajoutez chaque ville, définissez les heures de travail ou de veille de chaque personne, et laissez le Score de Confort trouver le moment qui convient vraiment à tout le monde — pas seulement techniquement possible.",
		},
		featuresEyebrow: "Pourquoi c'est mieux qu'un tableur",
		features: [
			{
				icon: '🎯',
				title: 'Score de Confort, pas seulement chevauchement',
				body: "Chaque horaire candidat est noté Excellent, Bon ou Mauvais selon son degré de confort réel pour chaque personne — pas seulement s'il tombe pendant les heures de jour.",
			},
			{
				icon: '♾️',
				title: 'Aucune limite de villes',
				body: "Ajoutez autant de participants que nécessaire. Pas de plafond de 12 villes, pas de rechargement de page pour ajouter une personne de plus.",
			},
			{
				icon: '🔗',
				title: 'De vrais liens partageables',
				body: 'Un clic copie un lien avec vos villes, la date et les paramètres déjà intégrés — aucune modification manuelle de l\'URL nécessaire.',
			},
			{
				icon: '🕐',
				title: 'Participants nommés, heures personnalisées',
				body: 'Donnez à chaque personne un nom et ses propres heures de travail ou de veille — pas un générique « Lieu 1, Lieu 2 ».',
			},
		],
		about: {
			eyebrow: 'À propos de cet outil',
			h2: 'Un planificateur de réunions conçu pour chaque fuseau horaire de la planète',
			p1: "Coordonner un appel entre trois continents ne devrait pas nécessiter un tableur, quatre onglets de navigateur et une table mentale de décalages UTC. Ce planificateur de réunions a été conçu pour remplacer tout cela par une seule page : ajoutez les villes concernées, et l'outil montre immédiatement quelles heures conviennent réellement à tout le monde — pas seulement celles théoriquement possibles.",
			p2: "La plupart des outils de planification de réunions par fuseau horaire s'arrêtent au chevauchement. Ils vous montrent la plage horaire où l'horloge de chaque ville affiche quelque chose entre 9h et 17h, et considèrent que c'est réglé. Cela ignore la réalité du travail à distance : 9h dans une ville peut être un début de journée parfaitement normal, tandis que le créneau « qui chevauche » de 17h dans une autre ville signifie que quelqu'un rejoint un appel après que ses enfants sont déjà couchés. Un véritable outil de fuseau horaire pour la planification de réunions doit tenir compte de ce que ressent réellement une personne à un moment donné, pas seulement s'il tombe dans une case générique d'heures de bureau.",
			h3Comfort: "Pourquoi une horloge mondiale pour planifier des réunions a besoin d'un Score de Confort",
			p3: "C'est le problème que cet outil résout avec son Score de Confort. Chaque horaire de réunion candidat est noté Excellent, Bon ou Mauvais selon son degré de confort pour chaque participant nommé — en tenant compte de ses propres heures de travail, de ses week-ends, et du fait que le créneau tombe tôt le matin, tard le soir, ou en plein milieu d'une journée normale. Ajoutez un collègue à Singapour, un client à São Paulo et un coéquipier à Berlin, et au lieu de plisser les yeux devant trois horloges séparées, vous obtenez une liste classée des horaires où la réunion est réellement bonne pour tout le monde, pas simplement possible.",
			p4: "C'est ce qui distingue un vrai planificateur de réunions d'une simple horloge mondiale. Une horloge mondiale pour réunions qui indique seulement l'heure actuelle dans chaque ville vous laisse encore faire la comparaison vous-même. Cet outil fait la comparaison à votre place, pour autant de villes que nécessaire — pas de plafond de 12 villes, pas de rechargement requis pour ajouter « juste une de plus », et aucune limite au nombre de bureaux internationaux que vous essayez d'aligner.",
			h3International: 'Conçu comme un planificateur de réunions international dès le départ',
			p5: "Les équipes distribuées restent rarement confinées à deux fuseaux horaires bien longtemps, c'est pourquoi cet outil a été conçu dès le départ comme un planificateur de réunions international plutôt que comme un gadget à deux villes ajouté après coup. Ajoutez une quatrième ville, une cinquième, une dixième — le Score de Confort se recalcule instantanément pour tout le groupe. Chaque participant peut aussi être nommé individuellement, donc au lieu de regarder « Lieu 1 » et « Lieu 2 », vous voyez « Priya (Mumbai) » et « Tom (Chicago) », ce qui rend bien plus facile de repérer d'un coup d'œil le matin de qui vous perturberiez.",
			p6: "Pour quiconque gère des tâches de planification de réunions mondiales — planifier des points quotidiens dans une organisation d'ingénierie distribuée, synchroniser une équipe marketing répartie sur trois régions, ou simplement trouver un horaire d'appel entre un client et une agence aux deux extrémités opposées de la planète — l'objectif est le même : minimiser le nombre de personnes devant accepter un appel peu pratique, et rendre évident quelle option y parvient le mieux.",
			h3Details: 'Un planificateur de réunions par fuseau horaire qui gère les détails automatiquement',
			p7: "Les calculs de fuseau horaire comportent plus de cas particuliers que la plupart des gens ne l'imaginent, et ce planificateur les gère pour que vous n'ayez pas à y penser. Les changements d'heure d'été décalent le décalage UTC d'une ville d'une heure à des dates qui diffèrent selon les pays, et le moteur de fuseau horaire de ce planificateur utilise toujours le décalage correct et actuel pour la date que vous avez sélectionnée — jamais un décalage mis en cache ou approximatif. Traversez une ligne de changement de date et le calculateur ajuste automatiquement le jour de la semaine, de sorte qu'un appel du vendredi après-midi depuis Los Angeles ne se transforme pas silencieusement en une demande du samedi matin à Auckland sans que personne ne le remarque.",
			p8: "Chaque participant peut également être réglé sur le mode Travail ou le mode Personnel. Le mode Travail s'en tient aux heures de travail standard et respecte les week-ends ; le mode Personnel élargit la plage horaire acceptable pour un appel informel entre famille ou amis, en utilisant les heures de veille plutôt que les heures de bureau. Combiné à un curseur d'heures acceptables ajustable, cela rend l'outil tout aussi utile comme planificateur de réunions professionnel que comme simple planificateur de date et d'heure pour un usage personnel — appels d'anniversaire, relations à distance, ou joindre un ami avant qu'il n'aille se coucher.",
			h3Share: "Partagez le résultat, pas seulement la capture d'écran",
			p9: 'Une fois que vous avez trouvé un horaire qui fonctionne, le bouton « Copier le lien à partager » encode chaque ville, nom, réglage d\'heures de travail et date choisie directement dans l\'URL. Envoyez ce lien à un collègue ou un client, et ils verront exactement la même liste classée d\'horaires — sans ressaisir les villes, sans expliquer quel créneau vous vouliez dire, sans aller-retour par e-mail à essayer de décrire un décalage horaire avec des mots. Cela fonctionne de la même manière que vous planifiiez un appel ponctuel ou que vous mettiez en favori une configuration récurrente de fuseaux horaires de réunion que vous utilisez chaque semaine.',
			h3Who: 'Pour qui est ce planificateur de réunions',
			p10: "Cet outil est conçu pour quiconque se demande régulièrement « quelle heure est-il chez eux ? » — équipes distantes et hybrides réparties dans plusieurs régions, recruteurs planifiant des entretiens avec des candidats internationaux, équipes de support client accompagnant des clients à l'étranger, journalistes coordonnant avec des sources à l'étranger, et familles restant en contact à travers les pays. Si votre travail ou votre vie traverse ne serait-ce qu'une frontière de fuseau horaire, un planificateur de réunions dédié vous épargne la charge mentale de faire cette conversion à la main à chaque fois.",
			p11Before: 'Au-delà du planificateur multi-villes ci-dessus, d\'autres outils de ce site couvrent des besoins plus spécifiques : un ',
			linkCalculator: 'calculateur deux villes',
			p11Mid1: " pour trouver rapidement le meilleur moment pour appeler une seule autre personne, un simple ",
			linkConverter: 'convertisseur de fuseau horaire',
			p11Mid2: ' pour vérifier une seule conversion horaire, et une ',
			linkWorldClock: 'horloge mondiale',
			p11After: " en direct pour un coup d'œil sur l'heure actuelle dans n'importe quelle ville. Ensemble, ils couvrent toute l'étendue de ce qu'un outil de fuseau horaire pour réunions devrait offrir — d'une vérification ponctuelle rapide à la planification complète d'une équipe mondiale et distribuée.",
		},
		faqEyebrow: 'FAQ',
		faqH2: 'Questions fréquentes',
		faqs: [
			{
				q: "Qu'est-ce qu'un planificateur de réunions ?",
				a: "Un planificateur de réunions est un outil qui trouve un moment pour se réunir ou s'appeler qui convient vraiment à toutes les personnes impliquées — en comparant les fuseaux horaires, les heures de travail et les disponibilités de chaque participant, au lieu de vous laisser faire ces calculs à la main. Celui-ci ajoute un Score de Confort par-dessus, afin que vous puissiez voir quels horaires sont réellement pratiques, pas seulement techniquement possibles.",
			},
			{
				q: 'Ce planificateur de réunions est-il vraiment gratuit ?',
				a: "Oui. Chaque outil de ce site — le planificateur multi-villes, le calculateur deux villes, le convertisseur de fuseau horaire et l'horloge mondiale — est gratuit, sans mur payant sur aucune fonctionnalité.",
			},
			{
				q: "Dois-je m'inscrire ou créer un compte ?",
				a: "Non. Il n'y a aucun système de compte. Ajoutez vos villes, ajustez les paramètres, et utilisez le lien partageable pour enregistrer ou envoyer un résultat — tout fonctionne sans créer de connexion.",
			},
			{
				q: 'Comment fonctionne le Score de Confort ?',
				a: "Chaque horaire candidat est noté Excellent, Bon ou Mauvais pour chaque participant selon ses heures de travail ou de veille, ses week-ends, et à quelle distance le créneau se trouve du milieu de sa journée. Un horaire n'obtient un score élevé que s'il est réellement pratique pour tout le monde, pas seulement techniquement dans les heures ouvrables pour toutes les parties.",
			},
			{
				q: "L'outil tient-il compte des changements d'heure d'été ?",
				a: "Oui. Les transitions d'heure d'été décalent le décalage UTC d'une ville d'une heure à des dates différentes selon le pays, et ce planificateur calcule toujours en utilisant le décalage actuel et correct pour la date que vous avez sélectionnée — jamais un décalage fixe ou approximatif.",
			},
			{
				q: 'Combien de villes ou de participants puis-je ajouter ?',
				a: "Il n'y a pas de limite. Ajoutez autant de villes et de participants nommés que votre réunion en a réellement besoin — le Score de Confort se recalcule instantanément pour tout le groupe à mesure que vous en ajoutez.",
			},
			{
				q: "Puis-je partager l'horaire de réunion trouvé avec quelqu'un d'autre ?",
				a: 'Oui. Le bouton « Copier le lien à partager » encode vos villes, noms, date et paramètres directement dans l\'URL, si bien que quiconque vous l\'envoyez voit exactement le même résultat — sans ressaisir d\'informations ni expliquer les calculs de fuseau horaire par e-mail.',
			},
			{
				q: 'Mes données sont-elles enregistrées, et sont-elles privées ?',
				a: "Rien n'est stocké sur un serveur ni lié à un compte — les calculs se font dans votre navigateur, et le seul endroit où votre configuration est enregistrée est dans le lien partageable lui-même, que vous seul choisissez d'envoyer.",
			},
			{
				q: 'Quelle est la meilleure façon de commencer une réunion quand tout le monde est dans un fuseau horaire différent ?',
				a: "Confirmez la conversion de fuseau horaire avant d'envoyer l'invitation, pas après — indiquez l'heure de la réunion dans l'heure locale propre à chaque participant plutôt que de supposer que tout le monde la convertira lui-même, et commencez à l'heure même si le créneau tombe en dehors des heures habituelles pour un participant, car c'est généralement la personne qui a fait le plus gros effort pour être présente.",
			},
			{
				q: 'Quelle est la différence entre ce planificateur de réunions et un simple convertisseur de fuseau horaire ?',
				a: "Un convertisseur vous indique seulement l'heure qu'il est ailleurs. Ce planificateur de réunions classe chaque heure de la journée pour chaque participant à la fois, en tenant compte des heures de travail ou de veille et des week-ends de chacun, afin que vous obteniez une liste restreinte d'horaires qui valent vraiment la peine d'être proposés plutôt qu'une conversion brute que vous devez encore évaluer vous-même.",
			},
			{
				q: 'Cela fonctionne-t-il sur mobile ?',
				a: "Oui — le planificateur, le calculateur, le convertisseur et l'horloge mondiale sont tous entièrement utilisables sur mobile, sans application séparée requise.",
			},
		],
	},
	de: {
		title: 'Meetingplaner — Finde die Beste Zeit für ein Treffen Über Zeitzonen Hinweg',
		description:
			'Kostenloser Meetingplaner und Weltuhr für die Zeitzonenplanung. Vergleiche Arbeitszeiten zwischen Städten, erhalte einen Comfort Score für jeden Zeitslot und teile sofort die beste globale Meetingzeit.',
		hero: {
			eyebrow: 'Zeitzonen-Meetingplaner',
			titlePrefix: 'Der ',
			titleHighlight: 'Meetingplaner',
			titleSuffix: ', der die beste Zeit für ein Treffen findet, egal wo sich jeder befindet',
			body: 'Füge jede Stadt hinzu, lege die Arbeits- oder Wachzeiten jeder Person fest, und lass den Comfort Score die Zeit finden, die wirklich für alle gut ist — nicht nur technisch möglich.',
		},
		featuresEyebrow: 'Warum das besser ist als eine Tabellenkalkulation',
		features: [
			{
				icon: '🎯',
				title: 'Comfort Score, nicht nur Überschneidung',
				body: 'Jede mögliche Zeit wird als Ausgezeichnet, Gut oder Schlecht bewertet, basierend darauf, wie bequem sie tatsächlich für jede Person ist — nicht nur, ob sie in die Tageslichtstunden fällt.',
			},
			{
				icon: '♾️',
				title: 'Kein Städtelimit',
				body: 'Füge so viele Teilnehmer hinzu, wie du brauchst. Kein 12-Städte-Limit, kein Neuladen der Seite, um eine weitere Person hinzuzufügen.',
			},
			{
				icon: '🔗',
				title: 'Echte teilbare Links',
				body: 'Ein Klick kopiert einen Link mit deinen Städten, dem Datum und den Einstellungen bereits eingebaut — keine manuelle URL-Bearbeitung nötig.',
			},
			{
				icon: '🕐',
				title: 'Benannte Teilnehmer, eigene Zeiten',
				body: 'Gib jeder Person einen Namen und ihre eigenen Arbeits- oder Wachzeiten — nicht ein generisches "Standort 1, Standort 2".',
			},
		],
		about: {
			eyebrow: 'Über dieses Tool',
			h2: 'Ein Meetingplaner, gebaut für jede Zeitzone der Erde',
			p1: 'Einen Anruf über drei Kontinente hinweg zu koordinieren, sollte keine Tabellenkalkulation, vier Browser-Tabs und eine mentale Tabelle von UTC-Offsets erfordern. Dieser Meetingplaner wurde entwickelt, um all das durch eine einzige Seite zu ersetzen: Füge die beteiligten Städte hinzu, und das Tool zeigt sofort, welche Stunden tatsächlich für alle funktionieren — nicht nur welche Stunden theoretisch möglich sind.',
			p2: 'Die meisten sogenannten Zeitzonen-Meetingplaner-Tools hören bei der Überschneidung auf. Sie zeigen dir den Zeitblock, in dem die Uhr jeder Stadt irgendwo zwischen 9 und 17 Uhr anzeigt, und erklären das für erledigt. Das ignoriert die Realität der Remote-Arbeit: 9 Uhr morgens in einer Stadt kann ein völlig normaler Arbeitsbeginn sein, während der "überschneidende" 17-Uhr-Slot in einer anderen Stadt bedeutet, dass jemand einem Anruf beitritt, nachdem seine Kinder schon im Bett sind. Ein echtes Zeitzonen-Meetingplaner-Tool muss berücksichtigen, wie sich eine Zeit für die Person, die sie erlebt, tatsächlich anfühlt — nicht nur, ob sie in eine generische Arbeitszeiten-Box fällt.',
			h3Comfort: 'Warum ein Weltuhr-Meetingplaner einen Comfort Score braucht',
			p3: 'Das ist das Problem, das dieses Tool mit seinem Comfort Score löst. Jede mögliche Meetingzeit wird für jeden benannten Teilnehmer als Ausgezeichnet, Gut oder Schlecht bewertet — basierend auf dessen eigenen Arbeitsstunden, Wochenenden, und ob der Zeitslot früh am Morgen, spät am Abend oder genau in der Mitte eines normalen Tages liegt. Füge einen Kollegen in Singapur, einen Kunden in São Paulo und ein Teammitglied in Berlin hinzu, und statt auf drei separate Uhren zu starren, erhältst du eine gerankte Liste von Zeiten, zu denen das Meeting für alle wirklich gut ist, nicht nur wahrnehmbar.',
			p4: 'Das unterscheidet einen echten Meetingplaner von einer bloßen Weltuhr. Eine Weltuhr, die nur die aktuelle Zeit in jeder Stadt anzeigt, überlässt dir immer noch den Vergleich selbst. Dieses Tool übernimmt den Vergleich für dich, über so viele Städte, wie du brauchst — kein 12-Städte-Limit, kein Neuladen erforderlich, um "nur noch eine" hinzuzufügen, und keine Begrenzung, wie viele internationale Büros du abzustimmen versuchst.',
			h3International: 'Von Anfang an als internationaler Meetingplaner konzipiert',
			p5: 'Verteilte Teams bleiben selten lange auf zwei Zeitzonen beschränkt, weshalb dies von Anfang an als internationaler Meetingplaner konzipiert wurde, statt als nachträglich angeflanschtes Zwei-Städte-Gadget. Füge eine vierte Stadt hinzu, eine fünfte, eine zehnte — der Comfort Score wird sofort für die gesamte Gruppe neu berechnet. Jeder Teilnehmer kann auch individuell benannt werden, sodass du statt "Standort 1" und "Standort 2" "Priya (Mumbai)" und "Tom (Chicago)" siehst, was es viel einfacher macht, auf einen Blick zu erkennen, wessen Morgen du stören würdest.',
			p6: 'Für jeden, der globale Meetingplanungsaufgaben verwaltet — die Planung von Standups über eine verteilte Engineering-Organisation hinweg, die Synchronisierung eines Marketingteams, das sich über drei Regionen verteilt, oder einfach das Finden einer Anrufzeit zwischen einem Kunden und einer Agentur auf gegenüberliegenden Seiten des Planeten — ist das Ziel dasselbe: die Anzahl der Personen zu minimieren, die einen unbequemen Anruf annehmen müssen, und deutlich zu machen, welche Option das am besten erreicht.',
			h3Details: 'Ein Zeitzonen-Meetingplaner, der die Details automatisch handhabt',
			p7: 'Zeitzonenberechnungen haben mehr Randfälle, als die meisten Menschen erwarten, und dieser Planer handhabt sie, damit du nicht darüber nachdenken musst. Sommerzeit-Übergänge verschieben den UTC-Offset einer Stadt um eine Stunde an Daten, die je nach Land variieren, und die Zeitzonen-Engine dieses Meetingplaners verwendet immer den korrekten, aktuellen Offset für das von dir gewählte Datum — nie einen zwischengespeicherten oder ungefähren. Überquere eine Datumsgrenze, und der Rechner passt den Wochentag automatisch an, sodass ein Freitagnachmittags-Anruf aus Los Angeles nicht unbemerkt zu einer Samstagmorgen-Bitte in Auckland wird.',
			p8: 'Jeder Teilnehmer kann auch auf Arbeitsmodus oder Privatmodus eingestellt werden. Der Arbeitsmodus hält sich an standardmäßige Arbeitszeiten und respektiert Wochenenden; der Privatmodus erweitert das akzeptable Zeitfenster für einen zwanglosen Anruf mit Familie oder Freunden, indem Wachzeiten statt Bürozeiten verwendet werden. Kombiniert mit einem einstellbaren Schieberegler für akzeptable Stunden macht dies das Tool ebenso nützlich als professioneller Meetingplaner wie als einfacher Termin- und Zeitplaner für den persönlichen Gebrauch — Geburtstagsanrufe, Fernbeziehungen, oder einen Freund zu erreichen, bevor er ins Bett geht.',
			h3Share: 'Teile das Ergebnis, nicht nur den Screenshot',
			p9: 'Sobald du eine passende Zeit gefunden hast, kodiert die Schaltfläche "Teilbaren Link kopieren" jede Stadt, jeden Namen, jede Arbeitszeiteinstellung und das gewählte Datum direkt in die URL. Sende diesen Link an einen Kollegen oder Kunden, und er sieht genau dieselbe gerankte Liste von Zeiten — kein erneutes Eingeben von Städten, keine Erklärung, welchen Slot du meintest, kein Hin und Her per E-Mail, um einen Zeitunterschied in Worten zu beschreiben. Es funktioniert genauso, egal ob du einen einmaligen Anruf planst oder eine wiederkehrende Meetingplaner-Zeitzonen-Konfiguration speicherst, die du jede Woche nutzt.',
			h3Who: 'Für wen dieser Meetingplaner gedacht ist',
			p10: 'Dieses Tool wurde für jeden entwickelt, der regelmäßig fragt "Wie spät ist es gerade bei denen?" — verteilte und hybride Teams über Regionen hinweg, Recruiter, die Interviews mit internationalen Kandidaten planen, Customer-Success-Teams, die Kunden im Ausland unterstützen, Journalisten, die sich mit Quellen im Ausland abstimmen, und Familien, die über Ländergrenzen hinweg in Kontakt bleiben. Wenn deine Arbeit oder dein Leben auch nur eine Zeitzonengrenze überschreitet, erspart dir ein dedizierter Meetingplaner den mentalen Aufwand, diese Umrechnung jedes Mal von Hand zu machen.',
			p11Before: 'Über den Multi-Städte-Planer oben hinaus decken weitere verwandte Tools auf dieser Seite spezifischere Bedürfnisse ab: ein ',
			linkCalculator: 'Zwei-Städte-Rechner',
			p11Mid1: ' zum schnellen Finden der besten Zeit, um eine andere Person anzurufen, ein unkomplizierter ',
			linkConverter: 'Zeitzonen-Umrechner',
			p11Mid2: ' zur Überprüfung einer einzelnen Zeitumrechnung, und eine live ',
			linkWorldClock: 'Weltuhr',
			p11After: ' für einen Blick auf die aktuelle Zeit in jeder Stadt. Zusammen decken sie das gesamte Spektrum dessen ab, was ein Zeitzonen-Meetingplaner-Tool leisten sollte — von einer schnellen einmaligen Prüfung bis zur vollständigen Planung über ein globales, verteiltes Team hinweg.',
		},
		faqEyebrow: 'FAQ',
		faqH2: 'Häufig gestellte Fragen',
		faqs: [
			{
				q: 'Was ist ein Meetingplaner?',
				a: 'Ein Meetingplaner ist ein Tool, das eine Zeit für ein Treffen oder einen Anruf findet, die tatsächlich für alle Beteiligten funktioniert — indem Zeitzonen, Arbeitszeiten und Verfügbarkeit aller Teilnehmer verglichen werden, statt dich diese Rechnung von Hand machen zu lassen. Dieses Tool fügt zusätzlich einen Comfort Score hinzu, damit du siehst, welche Zeiten wirklich bequem sind, nicht nur technisch möglich.',
			},
			{
				q: 'Ist dieser Meetingplaner wirklich kostenlos nutzbar?',
				a: 'Ja. Jedes Tool auf dieser Seite — der Multi-Städte-Planer, der Zwei-Städte-Rechner, der Zeitzonen-Umrechner und die Weltuhr — ist kostenlos nutzbar, ohne Bezahlschranke bei irgendeiner Funktion.',
			},
			{
				q: 'Muss ich mich anmelden oder ein Konto erstellen?',
				a: 'Nein. Es gibt überhaupt kein Kontosystem. Füge deine Städte hinzu, passe die Einstellungen an und nutze den teilbaren Link, um ein Ergebnis zu speichern oder zu senden — alles funktioniert ohne einen Login zu erstellen.',
			},
			{
				q: 'Wie funktioniert der Comfort Score?',
				a: 'Jede mögliche Zeit wird für jeden Teilnehmer als Ausgezeichnet, Gut oder Schlecht bewertet, basierend auf dessen Arbeits- oder Wachzeiten, Wochenenden und wie weit der Zeitslot von der Mitte seines Tages entfernt liegt. Eine Zeit erhält nur dann eine hohe Bewertung, wenn sie wirklich für alle bequem ist, nicht nur technisch innerhalb der Geschäftszeiten für alle Parteien liegt.',
			},
			{
				q: 'Berücksichtigt das Tool Sommerzeit-Umstellungen?',
				a: 'Ja. Sommerzeit-Übergänge verschieben den UTC-Offset einer Stadt um eine Stunde an je nach Land unterschiedlichen Daten, und dieser Planer berechnet immer mit dem aktuellen, korrekten Offset für das von dir gewählte Datum — niemals einem festen oder ungefähren.',
			},
			{
				q: 'Wie viele Städte oder Teilnehmer kann ich hinzufügen?',
				a: 'Es gibt kein Limit. Füge so viele Städte und benannte Teilnehmer hinzu, wie dein Meeting tatsächlich braucht — der Comfort Score wird sofort für die gesamte Gruppe neu berechnet, während du weitere hinzufügst.',
			},
			{
				q: 'Kann ich die gefundene Meetingzeit mit jemand anderem teilen?',
				a: 'Ja. Die Schaltfläche "Teilbaren Link kopieren" kodiert deine Städte, Namen, das Datum und die Einstellungen direkt in die URL, sodass jeder, an den du sie sendest, genau dasselbe Ergebnis sieht — ohne Informationen erneut einzugeben oder die Zeitzonen-Rechnung per E-Mail zu erklären.',
			},
			{
				q: 'Werden meine Daten gespeichert, und sind sie privat?',
				a: 'Nichts wird auf einem Server gespeichert oder mit einem Konto verknüpft — Berechnungen finden in deinem Browser statt, und der einzige Ort, an dem deine Konfiguration gespeichert wird, ist innerhalb des teilbaren Links selbst, den nur du zu senden entscheidest.',
			},
			{
				q: 'Was ist der beste Weg, ein Meeting zu beginnen, wenn sich alle in unterschiedlichen Zeitzonen befinden?',
				a: 'Bestätige die Zeitzonenumrechnung, bevor du die Einladung sendest, nicht danach — gib die Meetingzeit in der jeweils eigenen Ortszeit jedes Teilnehmers an, statt anzunehmen, dass jeder sie selbst umrechnet, und beginne pünktlich, auch wenn der Slot außerhalb der Standardzeiten für einen Teilnehmer liegt, da das normalerweise die Person ist, die das größte Zugeständnis gemacht hat, um dabei zu sein.',
			},
			{
				q: 'Was ist der Unterschied zwischen diesem Meetingplaner und einem einfachen Zeitzonen-Umrechner?',
				a: 'Ein Umrechner sagt dir nur, wie spät es anderswo ist. Dieser Meetingplaner bewertet jede Stunde des Tages für jeden Teilnehmer gleichzeitig, unter Berücksichtigung der Arbeits- oder Wachzeiten und Wochenenden jeder Person, sodass du eine Auswahlliste von Zeiten erhältst, die es wirklich wert sind, vorgeschlagen zu werden, statt einer rohen Umrechnung, die du selbst noch bewerten musst.',
			},
			{
				q: 'Funktioniert das auf dem Handy?',
				a: 'Ja — der Planer, der Rechner, der Umrechner und die Weltuhr sind alle vollständig auf dem Handy nutzbar, keine separate App erforderlich.',
			},
		],
	},
	pt: {
		title: 'Planejador de Reuniões — Encontre o Melhor Horário para se Reunir Entre Fusos Horários',
		description:
			'Planejador de reuniões e relógio mundial gratuitos para agendamento entre fusos horários. Compare horários de trabalho entre cidades, obtenha uma Pontuação de Conforto para cada horário e compartilhe instantaneamente o melhor horário de reunião global.',
		hero: {
			eyebrow: 'Planejador de reuniões para fusos horários',
			titlePrefix: 'O ',
			titleHighlight: 'planejador de reuniões',
			titleSuffix: ' que encontra o melhor horário para se reunir, onde quer que cada um esteja',
			body: 'Adicione cada cidade, defina o horário de trabalho ou de vigília de cada pessoa, e deixe a Pontuação de Conforto encontrar o horário que realmente é bom para todos — não apenas tecnicamente possível.',
		},
		featuresEyebrow: 'Por que isso é melhor que uma planilha',
		features: [
			{
				icon: '🎯',
				title: 'Pontuação de Conforto, não apenas sobreposição',
				body: 'Cada horário candidato é classificado como Excelente, Bom ou Ruim com base em quão conveniente ele realmente é para cada pessoa — não apenas se cai durante o dia.',
			},
			{
				icon: '♾️',
				title: 'Sem limite de cidades',
				body: 'Adicione quantos participantes precisar. Sem limite de 12 cidades, sem recarregar a página para adicionar mais uma pessoa.',
			},
			{
				icon: '🔗',
				title: 'Links compartilháveis de verdade',
				body: 'Um clique copia um link com suas cidades, data e configurações já incorporadas — sem edição manual de URL necessária.',
			},
			{
				icon: '🕐',
				title: 'Participantes nomeados, horários personalizados',
				body: 'Dê a cada pessoa um nome e seu próprio horário de trabalho ou de vigília — não um genérico "Local 1, Local 2".',
			},
		],
		about: {
			eyebrow: 'Sobre esta ferramenta',
			h2: 'Um planejador de reuniões feito para todos os fusos horários do planeta',
			p1: 'Coordenar uma chamada entre três continentes não deveria exigir uma planilha, quatro abas do navegador e uma tabela mental de deslocamentos UTC. Este planejador de reuniões foi criado para substituir tudo isso por uma única página: adicione as cidades envolvidas, e a ferramenta mostra imediatamente quais horários realmente funcionam para todos — não apenas os horários teoricamente possíveis.',
			p2: 'A maioria das chamadas ferramentas de planejamento de reuniões por fuso horário para na sobreposição. Elas mostram o bloco de horas em que o relógio de cada cidade marca algo entre 9h e 17h, e consideram isso resolvido. Isso ignora a realidade do trabalho remoto: 9h em uma cidade pode ser um começo de dia perfeitamente normal, enquanto o horário "sobreposto" das 17h em outra cidade significa que alguém está entrando em uma chamada depois que seus filhos já foram dormir. Uma verdadeira ferramenta de fuso horário para planejamento de reuniões precisa considerar como um horário realmente parece para a pessoa que o vive, não apenas se ele cai dentro de uma caixa genérica de horário comercial.',
			h3Comfort: 'Por que um relógio mundial para planejar reuniões precisa de uma Pontuação de Conforto',
			p3: 'Esse é o problema que esta ferramenta resolve com sua Pontuação de Conforto. Cada horário de reunião candidato é classificado como Excelente, Bom ou Ruim com base em quão conveniente é para cada participante nomeado — considerando seu próprio horário de trabalho, seus fins de semana, e se o horário cai de manhã cedo, à noite tarde, ou bem no meio de um dia normal. Adicione um colega em Singapura, um cliente em São Paulo e um colega de equipe em Berlim, e em vez de ficar olhando para três relógios separados, você obtém uma lista classificada de horários em que a reunião é genuinamente boa para todos, não apenas possível de comparecer.',
			p4: 'Isso é o que separa um verdadeiro planejador de reuniões de um simples relógio mundial. Um relógio mundial para reuniões que só mostra a hora atual em cada cidade ainda deixa você fazer a comparação sozinho. Esta ferramenta faz a comparação para você, em quantas cidades você precisar — não há limite de 12 cidades, nenhuma recarga necessária para adicionar "só mais uma", e nenhum limite de quantos escritórios internacionais você está tentando alinhar.',
			h3International: 'Projetado como um planejador de reuniões internacional desde o primeiro dia',
			p5: 'Equipes distribuídas raramente permanecem restritas a dois fusos horários por muito tempo, e é por isso que isso foi projetado desde o início como um planejador de reuniões internacional, em vez de um aparelho de duas cidades adicionado depois. Adicione uma quarta cidade, uma quinta, uma décima — a Pontuação de Conforto é recalculada instantaneamente para todo o grupo. Cada participante também pode ser nomeado individualmente, então em vez de olhar para "Local 1" e "Local 2", você vê "Priya (Mumbai)" e "Tom (Chicago)", o que torna muito mais fácil perceber rapidamente de quem você estaria atrapalhando a manhã.',
			p6: 'Para quem gerencia tarefas globais de planejamento de reuniões — agendando reuniões diárias em uma organização de engenharia distribuída, sincronizando uma equipe de marketing dividida em três regiões, ou simplesmente encontrando um horário de chamada entre um cliente e uma agência em lados opostos do planeta — o objetivo é o mesmo: minimizar o número de pessoas que precisam aceitar uma chamada inconveniente, e deixar claro qual opção faz isso melhor.',
			h3Details: 'Um planejador de reuniões de fuso horário que trata os detalhes automaticamente',
			p7: 'A matemática de fuso horário tem mais casos extremos do que a maioria das pessoas espera, e este planejador os trata para que você não precise pensar neles. As transições de horário de verão deslocam o fuso UTC de uma cidade em uma hora em datas que diferem por país, e o motor de fuso horário deste planejador de reuniões sempre usa o deslocamento correto e atual para a data que você selecionou — nunca um armazenado em cache ou aproximado. Cruze uma linha de data e a calculadora ajusta automaticamente o dia da semana, então uma chamada de sexta-feira à tarde de Los Angeles não se transforma silenciosamente em um pedido de sábado de manhã em Auckland sem que ninguém perceba.',
			p8: 'Cada participante também pode ser configurado para o modo Trabalho ou modo Pessoal. O modo Trabalho segue o horário comercial padrão e respeita os fins de semana; o modo Pessoal amplia a janela aceitável para uma chamada informal com família ou amigos, usando horas de vigília em vez de horário de expediente. Combinado com um controle deslizante ajustável de horas aceitáveis, isso torna a ferramenta igualmente útil como um planejador de reuniões profissional e como um simples planejador de data e hora para uso pessoal — chamadas de aniversário, relacionamentos à distância, ou falar com um amigo antes que ele vá dormir.',
			h3Share: 'Compartilhe o resultado, não apenas a captura de tela',
			p9: 'Depois de encontrar um horário que funcione, o botão "Copiar link para compartilhar" codifica cada cidade, nome, configuração de horário de trabalho e data escolhida diretamente na URL. Envie esse link para um colega ou cliente e eles verão exatamente a mesma lista classificada de horários — sem reinserir cidades, sem explicar qual horário você quis dizer, sem idas e vindas por e-mail tentando descrever uma diferença de fuso horário em palavras. Funciona da mesma forma, seja você planejando uma chamada única ou salvando uma configuração recorrente de fusos horários de reunião que você usa toda semana.',
			h3Who: 'Para quem é este planejador de reuniões',
			p10: 'Esta ferramenta é feita para qualquer pessoa que regularmente se pergunta "que horas são para eles?" — equipes remotas e híbridas espalhadas por regiões, recrutadores agendando entrevistas com candidatos internacionais, equipes de sucesso do cliente apoiando clientes no exterior, jornalistas coordenando com fontes no exterior, e famílias mantendo contato entre países. Se seu trabalho ou sua vida cruza mesmo que um limite de fuso horário, um planejador de reuniões dedicado economiza o esforço mental de fazer essa conversão manualmente todas as vezes.',
			p11Before: 'Além do planejador multi-cidade acima, outras ferramentas relacionadas neste site cobrem necessidades mais específicas: uma ',
			linkCalculator: 'calculadora de duas cidades',
			p11Mid1: ' para encontrar rapidamente o melhor horário para ligar para outra pessoa, um ',
			linkConverter: 'conversor de fuso horário',
			p11Mid2: ' direto para verificar uma única conversão de horário, e um ',
			linkWorldClock: 'relógio mundial',
			p11After: ' ao vivo para ver rapidamente a hora atual em qualquer cidade. Juntas, elas cobrem toda a gama do que uma ferramenta de fuso horário para reuniões deveria fazer — desde uma verificação rápida e única até o agendamento completo de uma equipe global e distribuída.',
		},
		faqEyebrow: 'Perguntas frequentes',
		faqH2: 'Perguntas frequentes',
		faqs: [
			{
				q: 'O que é um planejador de reuniões?',
				a: 'Um planejador de reuniões é uma ferramenta que encontra um horário para se reunir ou ligar que realmente funciona para todos os envolvidos — comparando fusos horários, horários de trabalho e disponibilidade de cada participante, em vez de deixar você fazer essa matemática manualmente. Este ainda adiciona uma Pontuação de Conforto, para que você veja quais horários são genuinamente convenientes, não apenas tecnicamente possíveis.',
			},
			{
				q: 'Este planejador de reuniões é realmente gratuito?',
				a: 'Sim. Cada ferramenta neste site — o planejador multi-cidade, a calculadora de duas cidades, o conversor de fuso horário e o relógio mundial — é gratuita, sem paywall em nenhum recurso.',
			},
			{
				q: 'Preciso me cadastrar ou criar uma conta?',
				a: 'Não. Não há sistema de contas. Adicione suas cidades, ajuste as configurações e use o link compartilhável para salvar ou enviar um resultado — tudo funciona sem criar um login.',
			},
			{
				q: 'Como funciona a Pontuação de Conforto?',
				a: 'Cada horário candidato é classificado como Excelente, Bom ou Ruim para cada participante com base em seu horário de trabalho ou de vigília, seus fins de semana, e quão longe o horário fica do meio do dia dessa pessoa. Um horário só recebe pontuação alta se for genuinamente conveniente para todos, não apenas tecnicamente dentro do horário comercial para todas as partes.',
			},
			{
				q: 'A ferramenta considera as mudanças de horário de verão?',
				a: 'Sim. As transições de horário de verão deslocam o fuso UTC de uma cidade em uma hora em datas diferentes dependendo do país, e este planejador sempre calcula usando o deslocamento atual e correto para a data que você selecionou — nunca um fixo ou aproximado.',
			},
			{
				q: 'Quantas cidades ou participantes posso adicionar?',
				a: 'Não há limite. Adicione quantas cidades e participantes nomeados sua reunião realmente precisar — a Pontuação de Conforto é recalculada instantaneamente para todo o grupo à medida que você adiciona mais.',
			},
			{
				q: 'Posso compartilhar o horário de reunião que encontrei com outra pessoa?',
				a: 'Sim. O botão "Copiar link para compartilhar" codifica suas cidades, nomes, data e configurações diretamente na URL, então qualquer pessoa para quem você o enviar verá exatamente o mesmo resultado — sem reinserir informações ou explicar a matemática de fuso horário por e-mail.',
			},
			{
				q: 'Meus dados são salvos, e são privados?',
				a: 'Nada é armazenado em um servidor ou vinculado a uma conta — os cálculos acontecem no seu navegador, e o único lugar onde sua configuração é salva é dentro do próprio link compartilhável, que só você escolhe enviar.',
			},
			{
				q: 'Qual é a melhor forma de começar uma reunião quando todos estão em fusos horários diferentes?',
				a: 'Confirme a conversão de fuso horário antes de enviar o convite, não depois — informe o horário da reunião no horário local de cada participante, em vez de presumir que todos vão convertê-lo sozinhos, e comece no horário mesmo que o horário caia fora do padrão para um participante, já que geralmente essa é a pessoa que fez a maior concessão para estar presente.',
			},
			{
				q: 'Qual a diferença entre este planejador de reuniões e um simples conversor de fuso horário?',
				a: 'Um conversor apenas informa que horas são em outro lugar. Este planejador de reuniões classifica cada hora do dia para cada participante ao mesmo tempo, considerando o horário de trabalho ou de vigília e os fins de semana de cada pessoa, então você obtém uma lista curta de horários que realmente vale a pena propor, em vez de uma conversão bruta que você ainda precisa avaliar sozinho.',
			},
			{
				q: 'Isso funciona no celular?',
				a: 'Sim — o planejador, a calculadora, o conversor e o relógio mundial são todos totalmente utilizáveis no celular, sem necessidade de aplicativo separado.',
			},
		],
	},
	ko: {
		title: '미팅 플래너 — 시간대를 넘나드는 최적의 회의 시간 찾기',
		description:
			'시간대 일정 조율을 위한 무료 미팅 플래너 및 세계 시계. 도시 간 근무 시간을 비교하고, 각 시간대에 대한 컴포트 스코어를 확인하고, 최적의 글로벌 회의 시간을 즉시 공유하세요.',
		hero: {
			eyebrow: '시간대 미팅 플래너',
			titlePrefix: '모두가 어디에 있든 ',
			titleHighlight: '최적의 회의 시간',
			titleSuffix: '을 찾아주는 미팅 플래너',
			body: '모든 도시를 추가하고, 각 참가자의 근무 시간 또는 활동 시간을 설정하면, 컴포트 스코어가 단순히 기술적으로 가능한 시간이 아니라 모두에게 실제로 좋은 시간을 찾아드립니다.',
		},
		featuresEyebrow: '스프레드시트보다 나은 이유',
		features: [
			{
				icon: '🎯',
				title: '단순한 겹침이 아닌 컴포트 스코어',
				body: '각 후보 시간은 단순히 낮 시간대인지가 아니라, 실제로 각 사람에게 얼마나 편한지에 따라 우수·양호·나쁨으로 평가됩니다.',
			},
			{
				icon: '♾️',
				title: '도시 수 제한 없음',
				body: '필요한 만큼 참가자를 추가하세요. 12개 도시 제한도, 한 명을 더 추가하기 위한 페이지 새로고침도 없습니다.',
			},
			{
				icon: '🔗',
				title: '진짜 공유 가능한 링크',
				body: '클릭 한 번으로 도시, 날짜, 설정이 이미 포함된 링크를 복사할 수 있습니다 — 수동으로 URL을 편집할 필요가 없습니다.',
			},
			{
				icon: '🕐',
				title: '이름이 있는 참가자, 맞춤 시간',
				body: '"위치 1, 위치 2" 같은 일반적인 표시 대신, 각 사람에게 이름과 자신만의 근무 시간 또는 활동 시간을 부여하세요.',
			},
		],
		about: {
			eyebrow: '이 도구에 대하여',
			h2: '지구상의 모든 시간대를 위해 만들어진 미팅 플래너',
			p1: '세 대륙을 넘나드는 통화를 조율하는 데 스프레드시트, 네 개의 브라우저 탭, 그리고 머릿속의 UTC 오프셋 표가 필요해서는 안 됩니다. 이 미팅 플래너는 그 모든 것을 하나의 페이지로 대체하기 위해 만들어졌습니다: 관련된 도시를 추가하기만 하면, 이 도구는 이론적으로 가능한 시간이 아니라 실제로 모두에게 통하는 시간을 즉시 보여줍니다.',
			p2: '이른바 시간대 미팅 플래너 도구들은 대부분 겹치는 시간을 찾는 데서 멈춥니다. 각 도시의 시계가 9시에서 5시 사이 어딘가를 가리키는 시간대를 보여주고 그것으로 끝입니다. 이는 원격 근무의 현실을 무시하는 것입니다: 한 도시의 오전 9시는 지극히 정상적인 하루의 시작일 수 있지만, 다른 도시의 "겹치는" 오후 5시는 누군가의 아이들이 이미 잠든 후에 통화에 참여한다는 것을 의미할 수 있습니다. 진정한 시간대 미팅 플래너 도구는 단순히 일반적인 업무 시간 범위에 들어가는지가 아니라, 그 시간이 실제로 그것을 살아가는 사람에게 어떻게 느껴지는지를 고려해야 합니다.',
			h3Comfort: '세계 시계 미팅 플래너에 컴포트 스코어가 필요한 이유',
			p3: '이것이 바로 이 도구가 컴포트 스코어로 해결하는 문제입니다. 각 후보 회의 시간은 이름이 지정된 각 참가자에 대해, 그들의 근무 시간, 주말, 그리고 그 시간대가 이른 아침인지, 늦은 저녁인지, 아니면 하루의 정중앙인지에 따라 우수·양호·나쁨으로 평가됩니다. 싱가포르의 동료, 상파울루의 고객, 베를린의 팀원을 추가하면, 세 개의 시계를 따로 보는 대신 회의가 단순히 참석 가능한 정도가 아니라 진정으로 모두에게 좋은 시간의 순위 목록을 얻게 됩니다.',
			p4: '이것이 진정한 미팅 플래너와 단순한 세계 시계를 구분 짓는 점입니다. 각 도시의 현재 시간만 알려주는 세계 시계 미팅 플래너는 여전히 비교 작업을 직접 하도록 남겨둡니다. 이 도구는 필요한 만큼 많은 도시에 대해 그 비교를 대신 해줍니다 — 12개 도시 제한도 없고, "딱 한 명만 더" 추가하기 위한 새로고침도 필요 없으며, 조율하려는 국제 사무소 수에도 제한이 없습니다.',
			h3International: '처음부터 국제 미팅 플래너로 설계됨',
			p5: '분산된 팀은 좀처럼 오랫동안 두 개의 시간대에만 머무르지 않으므로, 이 도구는 나중에 덧붙인 두 도시용 도구가 아니라 처음부터 국제 미팅 플래너로 설계되었습니다. 네 번째, 다섯 번째, 열 번째 도시를 추가해도 컴포트 스코어는 전체 그룹에 대해 즉시 재계산됩니다. 각 참가자는 개별적으로 이름을 지정할 수도 있어, "위치 1"과 "위치 2"를 보는 대신 "프리야(뭄바이)"와 "톰(시카고)"을 보게 되어 누구의 아침을 방해하게 되는지 한눈에 훨씬 쉽게 알 수 있습니다.',
			p6: '분산된 엔지니어링 조직 전반의 스탠드업 일정을 조율하거나, 세 지역에 걸쳐 나뉜 마케팅 팀을 동기화하거나, 지구 반대편에 있는 고객과 대행사 간의 통화 시간을 찾는 등 글로벌 미팅 플래닝 업무를 관리하는 모든 사람에게 목표는 동일합니다: 불편한 통화를 받아들여야 하는 사람의 수를 최소화하고, 어떤 옵션이 이를 가장 잘 달성하는지 명확히 하는 것입니다.',
			h3Details: '세부 사항을 자동으로 처리하는 시간대 미팅 플래너',
			p7: '시간대 계산에는 대부분의 사람들이 예상하는 것보다 더 많은 예외 상황이 있으며, 이 플래너는 사용자가 그것들을 신경 쓰지 않아도 되도록 처리합니다. 서머타임 전환은 국가별로 다른 날짜에 도시의 UTC 오프셋을 한 시간씩 이동시키는데, 이 미팅 플래너의 시간대 엔진은 선택한 날짜에 대해 항상 정확하고 현재의 오프셋을 사용합니다 — 캐시되거나 근사치인 오프셋은 절대 사용하지 않습니다. 날짜 경계선을 넘으면 계산기가 요일을 자동으로 조정하므로, 로스앤젤레스에서의 금요일 오후 통화가 아무도 모르는 사이에 오클랜드의 토요일 아침 요청으로 조용히 바뀌는 일은 없습니다.',
			p8: '각 참가자는 업무 모드 또는 개인 모드로 설정할 수도 있습니다. 업무 모드는 표준 근무 시간을 준수하고 주말을 존중합니다. 개인 모드는 사무실 시간 대신 활동 시간을 사용하여 가족이나 친구와의 편안한 통화를 위한 허용 범위를 넓힙니다. 조절 가능한 허용 시간 슬라이더와 결합되어, 이 도구는 전문적인 미팅 플래너로서뿐만 아니라 생일 축하 전화, 장거리 연애, 잠자리에 들기 전 친구에게 연락하는 등 개인적인 용도의 간단한 날짜 및 시간 미팅 플래너로도 똑같이 유용합니다.',
			h3Share: '스크린샷이 아닌 결과 자체를 공유하세요',
			p9: '적합한 시간을 찾으면, "공유 가능한 링크 복사" 버튼이 모든 도시, 이름, 근무 시간 설정, 선택한 날짜를 URL에 직접 인코딩합니다. 그 링크를 동료나 고객에게 보내면 그들도 정확히 동일한 순위의 시간 목록을 보게 됩니다 — 도시를 다시 입력할 필요도, 어떤 시간대를 의미했는지 설명할 필요도, 이메일로 시차를 말로 설명하려는 번거로운 왕복도 없습니다. 일회성 통화를 계획하든, 매주 사용하는 반복적인 미팅 플래너 시간대 설정을 북마크하든 동일하게 작동합니다.',
			h3Who: '이 미팅 플래너는 누구를 위한 것인가',
			p10: '이 도구는 "그쪽은 지금 몇 시일까?"라고 정기적으로 묻는 모든 사람을 위해 만들어졌습니다 — 여러 지역에 흩어진 원격 및 하이브리드 팀, 해외 지원자와의 면접을 일정 조율하는 채용 담당자, 해외 고객을 지원하는 고객 성공 팀, 해외 취재원과 조율하는 기자, 그리고 국경을 넘어 연락을 유지하는 가족들. 업무나 삶이 단 하나의 시간대 경계라도 넘는다면, 전용 미팅 플래너는 매번 수작업으로 그 변환을 하는 정신적 부담을 덜어줍니다.',
			p11Before: '위의 다중 도시 플래너 외에도, 이 사이트의 관련 도구들은 더 구체적인 요구를 충족합니다: 다른 한 사람과 통화하기 가장 좋은 시간을 빠르게 찾는 ',
			linkCalculator: '두 도시 계산기',
			p11Mid1: ', 단일 시간 변환을 확인하는 간단한 ',
			linkConverter: '시간대 변환기',
			p11Mid2: ', 그리고 어느 도시든 현재 시간을 한눈에 확인할 수 있는 실시간 ',
			linkWorldClock: '세계 시계',
			p11After: '입니다. 이들을 합치면 빠른 일회성 확인부터 글로벌 분산 팀 전체의 완전한 일정 조율까지, 시간대 미팅 플래너 도구가 해야 할 모든 범위를 다룹니다.',
		},
		faqEyebrow: '자주 묻는 질문',
		faqH2: '자주 묻는 질문',
		faqs: [
			{
				q: '미팅 플래너란 무엇인가요?',
				a: '미팅 플래너는 모든 참가자의 시간대, 근무 시간, 가용성을 비교하여 관련된 모든 사람에게 실제로 통하는 회의나 통화 시간을 찾아주는 도구입니다 — 직접 계산할 필요가 없습니다. 이 도구는 여기에 컴포트 스코어를 추가하여, 단순히 기술적으로 가능한 시간이 아니라 진정으로 편리한 시간을 볼 수 있게 해줍니다.',
			},
			{
				q: '이 미팅 플래너는 정말 무료로 사용할 수 있나요?',
				a: '네. 이 사이트의 모든 도구 — 다중 도시 플래너, 두 도시 계산기, 시간대 변환기, 세계 시계 — 는 모두 무료이며, 어떤 기능에도 유료 장벽이 없습니다.',
			},
			{
				q: '가입하거나 계정을 만들어야 하나요?',
				a: '아니요. 계정 시스템 자체가 없습니다. 도시를 추가하고, 설정을 조정하고, 공유 가능한 링크를 사용해 결과를 저장하거나 전송하세요 — 로그인을 만들지 않아도 모든 기능이 작동합니다.',
			},
			{
				q: '컴포트 스코어는 어떻게 작동하나요?',
				a: '각 후보 시간은 각 참가자의 근무 시간 또는 활동 시간, 주말, 그리고 그 시간대가 하루의 중간에서 얼마나 떨어져 있는지를 기준으로 우수·양호·나쁨으로 평가됩니다. 어떤 시간이 높은 점수를 받으려면 모든 당사자에게 단순히 기술적으로 업무 시간 내에 있는 것이 아니라 진정으로 모두에게 편리해야 합니다.',
			},
			{
				q: '이 도구는 서머타임 변경을 고려하나요?',
				a: '네. 서머타임 전환은 국가에 따라 다른 날짜에 도시의 UTC 오프셋을 한 시간씩 이동시키며, 이 플래너는 선택한 날짜에 대해 항상 현재의 정확한 오프셋을 사용하여 계산합니다 — 고정되거나 근사치인 오프셋은 절대 사용하지 않습니다.',
			},
			{
				q: '도시나 참가자를 몇 명까지 추가할 수 있나요?',
				a: '제한이 없습니다. 회의에 실제로 필요한 만큼 도시와 이름이 있는 참가자를 추가하세요 — 더 추가할 때마다 전체 그룹의 컴포트 스코어가 즉시 재계산됩니다.',
			},
			{
				q: '찾은 회의 시간을 다른 사람과 공유할 수 있나요?',
				a: '네. "공유 가능한 링크 복사" 버튼은 도시, 이름, 날짜, 설정을 URL에 직접 인코딩하므로, 링크를 보낸 상대방도 정보를 다시 입력하거나 이메일로 시간대 계산을 설명할 필요 없이 정확히 동일한 결과를 볼 수 있습니다.',
			},
			{
				q: '제 데이터는 저장되나요? 그리고 비공개인가요?',
				a: '어떤 것도 서버에 저장되거나 계정에 연결되지 않습니다 — 계산은 브라우저에서 이루어지며, 설정이 저장되는 유일한 곳은 공유 가능한 링크 자체 안이며, 이는 오직 사용자가 직접 보내기로 선택한 경우에만 전달됩니다.',
			},
			{
				q: '모두가 다른 시간대에 있을 때 회의를 시작하는 가장 좋은 방법은 무엇인가요?',
				a: '초대장을 보내기 전에 시간대 변환을 확인하세요, 보낸 후가 아니라요 — 모두가 알아서 변환할 것이라고 가정하지 말고 각 참석자의 현지 시간으로 회의 시간을 명시하세요. 그리고 한 참가자에게는 표준 시간을 벗어난 시간대라도 정시에 시작하세요. 보통 그 사람이 참석하기 위해 가장 큰 배려를 한 사람이기 때문입니다.',
			},
			{
				q: '이 미팅 플래너와 단순한 시간대 변환기의 차이는 무엇인가요?',
				a: '변환기는 단지 다른 곳이 지금 몇 시인지만 알려줍니다. 이 미팅 플래너는 각 사람의 근무 시간 또는 활동 시간과 주말을 고려하여 모든 참가자에 대해 하루의 모든 시간을 동시에 순위화하므로, 직접 평가해야 하는 단순 변환 결과가 아니라 실제로 제안할 가치가 있는 시간의 짧은 목록을 얻게 됩니다.',
			},
			{
				q: '모바일에서도 작동하나요?',
				a: '네 — 플래너, 계산기, 변환기, 세계 시계 모두 별도의 앱 없이 모바일에서 완전히 사용할 수 있습니다.',
			},
		],
	},
	it: {
		title: 'Pianificatore di Riunioni — Trova il Momento Migliore per Incontrarsi Tra Fusi Orari',
		description:
			'Pianificatore di riunioni e orologio mondiale gratuiti per la pianificazione tra fusi orari. Confronta gli orari di lavoro tra le città, ottieni un Punteggio di Comfort per ogni fascia oraria e condividi immediatamente il miglior orario di riunione globale.',
		hero: {
			eyebrow: 'Pianificatore di riunioni per fusi orari',
			titlePrefix: 'Il ',
			titleHighlight: 'pianificatore di riunioni',
			titleSuffix: ' che trova il momento migliore per incontrarsi, ovunque si trovi ciascuno',
			body: "Aggiungi ogni città, imposta l'orario di lavoro o di veglia di ciascuna persona, e lascia che il Punteggio di Comfort trovi l'orario che è davvero buono per tutti — non solo tecnicamente possibile.",
		},
		featuresEyebrow: 'Perché è meglio di un foglio di calcolo',
		features: [
			{
				icon: '🎯',
				title: 'Punteggio di Comfort, non solo sovrapposizione',
				body: "Ogni orario candidato viene valutato come Eccellente, Buono o Scarso in base a quanto sia realmente comodo per ciascuna persona — non solo se rientra nelle ore diurne.",
			},
			{
				icon: '♾️',
				title: 'Nessun limite di città',
				body: 'Aggiungi tutti i partecipanti di cui hai bisogno. Nessun limite di 12 città, nessun ricaricamento della pagina per aggiungere una persona in più.',
			},
			{
				icon: '🔗',
				title: 'Link condivisibili veri',
				body: "Un clic copia un link con le tue città, la data e le impostazioni già incorporate — nessuna modifica manuale dell'URL necessaria.",
			},
			{
				icon: '🕐',
				title: 'Partecipanti con nome, orari personalizzati',
				body: 'Dai a ciascuna persona un nome e il proprio orario di lavoro o di veglia — non un generico "Località 1, Località 2".',
			},
		],
		about: {
			eyebrow: 'Informazioni su questo strumento',
			h2: 'Un pianificatore di riunioni costruito per ogni fuso orario del pianeta',
			p1: "Coordinare una chiamata tra tre continenti non dovrebbe richiedere un foglio di calcolo, quattro schede del browser e una tabella mentale di offset UTC. Questo pianificatore di riunioni è stato creato per sostituire tutto ciò con un'unica pagina: aggiungi le città coinvolte, e lo strumento mostra immediatamente quali orari funzionano davvero per tutti — non solo quelli teoricamente possibili.",
			p2: 'La maggior parte dei cosiddetti strumenti di pianificazione riunioni per fuso orario si ferma alla sovrapposizione. Mostrano il blocco di ore in cui l\'orologio di ogni città segna qualcosa tra le 9 e le 17, e considerano il lavoro concluso. Questo ignora la realtà del lavoro da remoto: le 9 del mattino in una città possono essere un inizio giornata perfettamente normale, mentre la fascia "sovrapposta" delle 17 in un\'altra città significa che qualcuno si unisce a una chiamata dopo che i suoi figli sono già a letto. Un vero strumento di fuso orario per la pianificazione di riunioni deve tenere conto di come un orario si sente realmente per la persona che lo vive, non solo se rientra in una generica fascia di orario lavorativo.',
			h3Comfort: "Perché un orologio mondiale per pianificare riunioni ha bisogno di un Punteggio di Comfort",
			p3: "Questo è il problema che questo strumento risolve con il suo Punteggio di Comfort. Ogni orario di riunione candidato viene valutato come Eccellente, Buono o Scarso in base a quanto sia comodo per ciascun partecipante nominato — tenendo conto del suo orario di lavoro, dei suoi weekend, e se la fascia oraria cade al mattino presto, a tarda sera, o proprio nel mezzo di una giornata normale. Aggiungi un collega a Singapore, un cliente a San Paolo e un collaboratore a Berlino, e invece di strizzare gli occhi guardando tre orologi separati, ottieni un elenco classificato di orari in cui la riunione è genuinamente buona per tutti, non solo frequentabile.",
			p4: "Questo è ciò che distingue un vero pianificatore di riunioni da un semplice orologio mondiale. Un orologio mondiale per riunioni che indica solo l'ora attuale in ogni città ti lascia comunque fare il confronto da solo. Questo strumento fa il confronto al posto tuo, per tutte le città di cui hai bisogno — nessun limite di 12 città, nessun ricaricamento richiesto per aggiungere \"solo un'altra\", e nessun limite a quanti uffici internazionali stai cercando di allineare.",
			h3International: 'Progettato come pianificatore di riunioni internazionale fin dal primo giorno',
			p5: "I team distribuiti raramente restano confinati a due fusi orari per molto tempo, ed è per questo che questo strumento è stato progettato fin dall'inizio come pianificatore di riunioni internazionale, invece di un gadget a due città aggiunto in seguito. Aggiungi una quarta città, una quinta, una decima — il Punteggio di Comfort si ricalcola istantaneamente per l'intero gruppo. Ogni partecipante può anche essere nominato individualmente, quindi invece di fissare \"Località 1\" e \"Località 2\" vedi \"Priya (Mumbai)\" e \"Tom (Chicago)\", il che rende molto più facile capire a colpo d'occhio la mattinata di chi stai disturbando.",
			p6: "Per chiunque gestisca compiti di pianificazione riunioni globali — programmando gli standup in un'organizzazione di ingegneria distribuita, sincronizzando un team di marketing diviso su tre regioni, o semplicemente trovando un orario di chiamata tra un cliente e un'agenzia su lati opposti del pianeta — l'obiettivo è lo stesso: ridurre al minimo il numero di persone che devono accettare una chiamata scomoda, e rendere evidente quale opzione lo fa meglio.",
			h3Details: 'Un pianificatore di riunioni per fuso orario che gestisce i dettagli automaticamente',
			p7: "La matematica dei fusi orari ha più casi limite di quanto la maggior parte delle persone si aspetti, e questo pianificatore li gestisce così non devi pensarci tu. I cambi dell'ora legale spostano l'offset UTC di una città di un'ora in date che variano da paese a paese, e il motore di fuso orario di questo pianificatore di riunioni usa sempre l'offset corretto e attuale per la data che hai selezionato — mai uno memorizzato nella cache o approssimato. Attraversa una linea di cambio data e il calcolatore regola automaticamente il giorno della settimana, così una chiamata di venerdì pomeriggio da Los Angeles non si trasforma silenziosamente in una richiesta di sabato mattina ad Auckland senza che nessuno se ne accorga.",
			p8: "Ogni partecipante può anche essere impostato in modalità Lavoro o modalità Personale. La modalità Lavoro rispetta gli orari lavorativi standard e i weekend; la modalità Personale amplia la finestra accettabile per una chiamata informale con familiari o amici, usando le ore di veglia invece degli orari d'ufficio. Combinato con un cursore regolabile delle ore accettabili, questo rende lo strumento utile sia come pianificatore di riunioni professionale sia come semplice pianificatore di data e ora per uso personale — chiamate di compleanno, relazioni a distanza, o contattare un amico prima che vada a dormire.",
			h3Share: 'Condividi il risultato, non solo lo screenshot',
			p9: 'Una volta trovato un orario che funziona, il pulsante "Copia link condivisibile" codifica ogni città, nome, impostazione dell\'orario di lavoro e data scelta direttamente nell\'URL. Invia quel link a un collega o cliente e vedranno esattamente lo stesso elenco classificato di orari — senza reinserire le città, senza spiegare quale fascia intendevi, senza andirivieni via email cercando di descrivere a parole una differenza di fuso orario. Funziona allo stesso modo sia che tu stia pianificando una chiamata una tantum sia che tu stia salvando nei preferiti una configurazione ricorrente di fusi orari per riunioni che usi ogni settimana.',
			h3Who: 'Per chi è questo pianificatore di riunioni',
			p10: 'Questo strumento è pensato per chiunque si chieda regolarmente "che ora è per loro?" — team remoti e ibridi distribuiti su più regioni, recruiter che programmano colloqui con candidati internazionali, team di customer success che supportano clienti all\'estero, giornalisti che si coordinano con fonti all\'estero, e famiglie che restano in contatto tra paesi diversi. Se il tuo lavoro o la tua vita attraversa anche un solo confine di fuso orario, un pianificatore di riunioni dedicato ti risparmia lo sforzo mentale di fare quella conversione a mano ogni singola volta.',
			p11Before: 'Oltre al pianificatore multi-città sopra, altri strumenti correlati su questo sito coprono esigenze più specifiche: un ',
			linkCalculator: 'calcolatore a due città',
			p11Mid1: " per trovare rapidamente il momento migliore per chiamare un'altra persona, un semplice ",
			linkConverter: 'convertitore di fuso orario',
			p11Mid2: ' per verificare una singola conversione oraria, e un ',
			linkWorldClock: 'orologio mondiale',
			p11After: " dal vivo per dare un'occhiata all'ora attuale in qualsiasi città. Insieme coprono l'intera gamma di ciò che uno strumento di fuso orario per riunioni dovrebbe fare — da un rapido controllo occasionale alla pianificazione completa di un team globale e distribuito.",
		},
		faqEyebrow: 'FAQ',
		faqH2: 'Domande frequenti',
		faqs: [
			{
				q: "Cos'è un pianificatore di riunioni?",
				a: "Un pianificatore di riunioni è uno strumento che trova un orario per incontrarsi o chiamare che funzioni davvero per tutti i coinvolti — confrontando fusi orari, orari di lavoro e disponibilità di ogni partecipante, invece di lasciarti fare quel calcolo a mano. Questo aggiunge anche un Punteggio di Comfort, così puoi vedere quali orari sono davvero convenienti, non solo tecnicamente possibili.",
			},
			{
				q: 'Questo pianificatore di riunioni è davvero gratuito?',
				a: "Sì. Ogni strumento su questo sito — il pianificatore multi-città, il calcolatore a due città, il convertitore di fuso orario e l'orologio mondiale — è gratuito, senza paywall su nessuna funzionalità.",
			},
			{
				q: 'Devo registrarmi o creare un account?',
				a: "No. Non esiste alcun sistema di account. Aggiungi le tue città, regola le impostazioni, e usa il link condivisibile per salvare o inviare un risultato — tutto funziona senza creare un login.",
			},
			{
				q: 'Come funziona il Punteggio di Comfort?',
				a: "Ogni orario candidato viene valutato come Eccellente, Buono o Scarso per ogni partecipante in base al suo orario di lavoro o di veglia, ai suoi weekend, e a quanto la fascia oraria sia lontana dal centro della sua giornata. Un orario ottiene un punteggio alto solo se è genuinamente conveniente per tutti, non solo tecnicamente all'interno dell'orario lavorativo per tutte le parti.",
			},
			{
				q: "Lo strumento tiene conto dei cambi dell'ora legale?",
				a: "Sì. I cambi dell'ora legale spostano l'offset UTC di una città di un'ora in date che differiscono da paese a paese, e questo pianificatore calcola sempre usando l'offset attuale e corretto per la data che hai selezionato — mai uno fisso o approssimato.",
			},
			{
				q: 'Quante città o partecipanti posso aggiungere?',
				a: "Non c'è alcun limite. Aggiungi tutte le città e i partecipanti nominati di cui la tua riunione ha davvero bisogno — il Punteggio di Comfort si ricalcola istantaneamente per l'intero gruppo man mano che ne aggiungi altri.",
			},
			{
				q: "Posso condividere l'orario di riunione trovato con qualcun altro?",
				a: 'Sì. Il pulsante "Copia link condivisibile" codifica le tue città, i nomi, la data e le impostazioni direttamente nell\'URL, così chiunque tu lo invii vedrà esattamente lo stesso risultato — senza reinserire informazioni o spiegare i calcoli del fuso orario via email.',
			},
			{
				q: 'I miei dati vengono salvati, e sono privati?',
				a: "Nulla viene memorizzato su un server o collegato a un account — i calcoli avvengono nel tuo browser, e l'unico posto in cui la tua configurazione viene salvata è all'interno del link condivisibile stesso, che solo tu scegli di inviare.",
			},
			{
				q: 'Qual è il modo migliore per iniziare una riunione quando tutti sono in fusi orari diversi?',
				a: "Conferma la conversione del fuso orario prima di inviare l'invito, non dopo — indica l'orario della riunione nell'ora locale di ciascun partecipante invece di presumere che tutti la convertiranno da soli, e inizia puntuale anche se la fascia oraria cade fuori dagli orari standard per un partecipante, poiché di solito è quella la persona che ha fatto il maggiore sforzo per essere presente.",
			},
			{
				q: 'Qual è la differenza tra questo pianificatore di riunioni e un semplice convertitore di fuso orario?',
				a: "Un convertitore ti dice solo che ora è altrove. Questo pianificatore di riunioni classifica ogni ora del giorno per ogni partecipante contemporaneamente, tenendo conto dell'orario di lavoro o di veglia e dei weekend di ciascuno, così ottieni una lista ristretta di orari che vale davvero la pena proporre invece di una conversione grezza che devi ancora valutare da solo.",
			},
			{
				q: 'Funziona su dispositivi mobili?',
				a: "Sì — il pianificatore, il calcolatore, il convertitore e l'orologio mondiale sono tutti pienamente utilizzabili su mobile, senza bisogno di un'app separata.",
			},
		],
	},
};
