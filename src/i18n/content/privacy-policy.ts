export interface PrivacyPolicyContent {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	lastUpdatedLabel: string;
	intro: string;
	shortTitle: string;
	shortBody: string;
	collectTitle: string;
	collectBody: string;
	cookiesTitle: string;
	cookiesBody: string;
	thirdPartyTitle: string;
	thirdPartyBody: string;
	childrenTitle: string;
	childrenBody: string;
	changesTitle: string;
	changesBody: string;
	contactTitle: string;
	contactBodyBefore: string;
	contactBodyMiddle: string;
	contactLinkLabel: string;
	contactBodyAfter: string;
}

export const privacyPolicyContent: Record<string, PrivacyPolicyContent> = {
	es: {
		title: 'Política de Privacidad — MeetingPlannerTimeZone',
		description: 'La política de privacidad de MeetingPlannerTimeZone — cómo el sitio maneja los datos, las cookies y las analíticas.',
		eyebrow: 'Política de privacidad',
		h1: 'Política de privacidad',
		lastUpdatedLabel: 'Última actualización',
		intro:
			'MeetingPlannerTimeZone ("nosotros") ofrece herramientas gratuitas de planificación de zonas horarias en meetingplannertimezone.com (el "Sitio"). Esta política explica qué datos recopila el Sitio y cómo se usan.',
		shortTitle: 'La versión corta',
		shortBody:
			'No hay cuentas, y las herramientas de este Sitio funcionan enteramente en tu navegador. Las ciudades, fechas y horas que introduces no se envían ni almacenan en nuestros servidores — se usan solo para calcular el resultado en tu pantalla. Cuando compartes un enlace, los detalles de tu selección se codifican directamente en la URL de ese enlace, no en una base de datos.',
		collectTitle: 'Información que recopilamos',
		collectBody:
			'Como la mayoría de los sitios web, nuestro proveedor de hosting registra automáticamente datos técnicos estándar de cada visita — como dirección IP, tipo de navegador, tipo de dispositivo, página de referencia y páginas vistas — por seguridad y para mantener el Sitio funcionando de forma fiable. También podemos usar analíticas centradas en la privacidad para entender el tráfico agregado, como qué herramientas se usan más y qué páginas son populares. Estos datos no se usan para identificar a visitantes individuales.',
		cookiesTitle: 'Cookies',
		cookiesBody:
			'El Sitio no usa cookies para rastrearte en otros sitios web ni para crear perfiles publicitarios. Si eso cambia — por ejemplo, si añadimos analíticas o publicidad que dependan de cookies — actualizaremos esta política y proporcionaremos una forma de controlar tus preferencias.',
		thirdPartyTitle: 'Servicios de terceros',
		thirdPartyBody:
			'Podemos usar servicios de terceros para hosting, analíticas o monitorización de rendimiento. Estos proveedores pueden procesar datos técnicos (como los mencionados arriba) según sus propias políticas de privacidad. Elegimos proveedores que no venden datos personales y que no requieren crear una cuenta para usar este Sitio.',
		childrenTitle: 'Privacidad de menores',
		childrenBody: 'Este Sitio no está dirigido a menores y no recopilamos conscientemente información personal de menores.',
		changesTitle: 'Cambios en esta política',
		changesBody:
			'Podemos actualizar esta política de vez en cuando. La fecha de "Última actualización" en la parte superior de esta página refleja la revisión más reciente.',
		contactTitle: 'Contacto',
		contactBodyBefore: 'Las preguntas sobre esta política pueden enviarse a',
		contactBodyMiddle: ', o a través de nuestra',
		contactLinkLabel: 'página de contacto',
		contactBodyAfter: '.',
	},
	ja: {
		title: 'プライバシーポリシー — MeetingPlannerTimeZone',
		description: 'MeetingPlannerTimeZoneのプライバシーポリシー — サイトがデータ、Cookie、分析をどのように扱うか。',
		eyebrow: 'プライバシーポリシー',
		h1: 'プライバシーポリシー',
		lastUpdatedLabel: '最終更新日',
		intro:
			'MeetingPlannerTimeZone(「当社」)は、meetingplannertimezone.com(「本サイト」)にて無料のタイムゾーン計画ツールを提供しています。本ポリシーでは、本サイトが収集するデータとその使用方法について説明します。',
		shortTitle: '要約',
		shortBody:
			'アカウントは存在せず、本サイトのツールはすべてブラウザ内で動作します。入力した都市、日付、時刻は当社のサーバーに送信・保存されることはなく、画面上の結果を計算するためだけに使用されます。リンクを共有する場合、選択内容の詳細はそのリンクのURL自体にエンコードされ、データベースには保存されません。',
		collectTitle: '収集する情報',
		collectBody:
			'ほとんどのウェブサイトと同様に、当社のホスティングプロバイダーは、セキュリティおよびサイトの安定運用のために、すべての訪問についてIPアドレス、ブラウザの種類、デバイスの種類、参照元ページ、閲覧ページなどの標準的な技術データを自動的に記録します。また、どのツールが最もよく使われているか、どのページが人気かといった全体的なトラフィックを把握するために、プライバシーに配慮した分析を使用することがあります。このデータは個々の訪問者を特定するために使用されることはありません。',
		cookiesTitle: 'Cookie',
		cookiesBody:
			'本サイトは、他のウェブサイトを横断してあなたを追跡したり、広告プロファイルを作成したりするためにCookieを使用しません。もし今後変更があれば(例えば、Cookieに依存する分析や広告を追加する場合)、本ポリシーを更新し、設定を管理する方法を提供します。',
		thirdPartyTitle: '第三者サービス',
		thirdPartyBody:
			'当社は、ホスティング、分析、パフォーマンス監視のために第三者サービスを利用することがあります。これらのプロバイダーは、各自のプライバシーポリシーに基づき、上記のような技術データを処理する場合があります。当社は、個人データを販売せず、本サイトの利用にアカウント作成を必要としないプロバイダーを選定しています。',
		childrenTitle: '児童のプライバシー',
		childrenBody: '本サイトは児童を対象としておらず、児童の個人情報を意図的に収集することはありません。',
		changesTitle: '本ポリシーの変更',
		changesBody: '本ポリシーは随時更新される場合があります。ページ上部の「最終更新日」は、最新の改訂を反映しています。',
		contactTitle: 'お問い合わせ',
		contactBodyBefore: '本ポリシーに関するご質問は',
		contactBodyMiddle: '宛て、または',
		contactLinkLabel: 'お問い合わせページ',
		contactBodyAfter: 'よりお送りください。',
	},
	fr: {
		title: 'Politique de Confidentialité — MeetingPlannerTimeZone',
		description:
			'La politique de confidentialité de MeetingPlannerTimeZone — comment le site gère les données, les cookies et les analyses.',
		eyebrow: 'Politique de confidentialité',
		h1: 'Politique de confidentialité',
		lastUpdatedLabel: 'Dernière mise à jour',
		intro:
			'MeetingPlannerTimeZone (« nous ») propose des outils gratuits de planification de fuseaux horaires sur meetingplannertimezone.com (le « Site »). Cette politique explique quelles données le Site collecte et comment elles sont utilisées.',
		shortTitle: 'En bref',
		shortBody:
			"Il n'y a pas de comptes, et les outils de ce Site fonctionnent entièrement dans votre navigateur. Les villes, dates et heures que vous saisissez ne sont ni envoyées ni stockées sur nos serveurs — elles servent uniquement à calculer le résultat affiché à l'écran. Lorsque vous partagez un lien, les détails de votre sélection sont encodés directement dans l'URL de ce lien, pas dans une base de données.",
		collectTitle: 'Informations que nous collectons',
		collectBody:
			"Comme la plupart des sites web, notre hébergeur enregistre automatiquement des données techniques standard pour chaque visite — comme l'adresse IP, le type de navigateur, le type d'appareil, la page de provenance et les pages consultées — pour la sécurité et pour maintenir le Site opérationnel de manière fiable. Nous pouvons également utiliser des analyses respectueuses de la vie privée pour comprendre le trafic global, comme les outils les plus utilisés et les pages les plus populaires. Ces données ne servent pas à identifier des visiteurs individuels.",
		cookiesTitle: 'Cookies',
		cookiesBody:
			"Le Site n'utilise pas de cookies pour vous suivre sur d'autres sites web ou pour créer des profils publicitaires. Si cela change — par exemple, si nous ajoutons des analyses ou de la publicité reposant sur des cookies — nous mettrons à jour cette politique et fournirons un moyen de gérer vos préférences.",
		thirdPartyTitle: 'Services tiers',
		thirdPartyBody:
			"Nous pouvons utiliser des services tiers pour l'hébergement, l'analyse ou la surveillance des performances. Ces prestataires peuvent traiter des données techniques (comme celles listées ci-dessus) selon leurs propres politiques de confidentialité. Nous choisissons des prestataires qui ne vendent pas de données personnelles et qui ne nécessitent pas de création de compte pour utiliser ce Site.",
		childrenTitle: 'Confidentialité des enfants',
		childrenBody:
			"Ce Site ne s'adresse pas aux enfants et nous ne collectons pas sciemment d'informations personnelles auprès d'enfants.",
		changesTitle: 'Modifications de cette politique',
		changesBody:
			'Nous pouvons mettre à jour cette politique de temps à autre. La date de « Dernière mise à jour » en haut de cette page reflète la révision la plus récente.',
		contactTitle: 'Contact',
		contactBodyBefore: 'Les questions concernant cette politique peuvent être envoyées à',
		contactBodyMiddle: ', ou via notre',
		contactLinkLabel: 'page de contact',
		contactBodyAfter: '.',
	},
	de: {
		title: 'Datenschutzerklärung — MeetingPlannerTimeZone',
		description: 'Die Datenschutzerklärung von MeetingPlannerTimeZone — wie die Seite mit Daten, Cookies und Analysen umgeht.',
		eyebrow: 'Datenschutzerklärung',
		h1: 'Datenschutzerklärung',
		lastUpdatedLabel: 'Zuletzt aktualisiert',
		intro:
			'MeetingPlannerTimeZone ("wir") bietet kostenlose Zeitzonen-Planungstools auf meetingplannertimezone.com (die "Seite") an. Diese Richtlinie erklärt, welche Daten die Seite sammelt und wie sie verwendet werden.',
		shortTitle: 'Kurzfassung',
		shortBody:
			'Es gibt keine Konten, und die Tools auf dieser Seite laufen vollständig in deinem Browser. Die von dir eingegebenen Städte, Daten und Uhrzeiten werden nicht an unsere Server gesendet oder dort gespeichert — sie werden nur verwendet, um das Ergebnis auf deinem Bildschirm zu berechnen. Wenn du einen Link teilst, werden die Details deiner Auswahl direkt in die URL dieses Links kodiert, nicht in einer Datenbank gespeichert.',
		collectTitle: 'Informationen, die wir sammeln',
		collectBody:
			'Wie die meisten Websites protokolliert unser Hosting-Anbieter automatisch technische Standarddaten für jeden Besuch — wie IP-Adresse, Browsertyp, Gerätetyp, verweisende Seite und aufgerufene Seiten — aus Sicherheitsgründen und um die Seite zuverlässig am Laufen zu halten. Wir können auch datenschutzfreundliche Analysen nutzen, um aggregierten Traffic zu verstehen, etwa welche Tools am meisten genutzt werden und welche Seiten beliebt sind. Diese Daten werden nicht verwendet, um einzelne Besucher zu identifizieren.',
		cookiesTitle: 'Cookies',
		cookiesBody:
			'Die Seite verwendet keine Cookies, um dich auf anderen Websites zu verfolgen oder Werbeprofile zu erstellen. Sollte sich das ändern — zum Beispiel, wenn wir Analysen oder Werbung hinzufügen, die auf Cookies basieren — werden wir diese Richtlinie aktualisieren und eine Möglichkeit bieten, deine Einstellungen zu verwalten.',
		thirdPartyTitle: 'Dienste Dritter',
		thirdPartyBody:
			'Wir können Dienste Dritter für Hosting, Analysen oder Leistungsüberwachung nutzen. Diese Anbieter können technische Daten (wie oben aufgeführt) gemäß ihren eigenen Datenschutzrichtlinien verarbeiten. Wir wählen Anbieter aus, die keine personenbezogenen Daten verkaufen und keine Kontoerstellung für die Nutzung dieser Seite erfordern.',
		childrenTitle: 'Datenschutz für Kinder',
		childrenBody: 'Diese Seite richtet sich nicht an Kinder, und wir sammeln wissentlich keine personenbezogenen Daten von Kindern.',
		changesTitle: 'Änderungen dieser Richtlinie',
		changesBody:
			'Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Das Datum "Zuletzt aktualisiert" oben auf dieser Seite spiegelt die jüngste Überarbeitung wider.',
		contactTitle: 'Kontakt',
		contactBodyBefore: 'Fragen zu dieser Richtlinie können gesendet werden an',
		contactBodyMiddle: ', oder über unsere',
		contactLinkLabel: 'Kontaktseite',
		contactBodyAfter: '.',
	},
	pt: {
		title: 'Política de Privacidade — MeetingPlannerTimeZone',
		description: 'A política de privacidade da MeetingPlannerTimeZone — como o site trata dados, cookies e análises.',
		eyebrow: 'Política de privacidade',
		h1: 'Política de privacidade',
		lastUpdatedLabel: 'Última atualização',
		intro:
			'MeetingPlannerTimeZone ("nós") oferece ferramentas gratuitas de planejamento de fuso horário em meetingplannertimezone.com (o "Site"). Esta política explica quais dados o Site coleta e como são usados.',
		shortTitle: 'A versão resumida',
		shortBody:
			'Não há contas, e as ferramentas deste Site funcionam inteiramente no seu navegador. As cidades, datas e horários que você insere não são enviados nem armazenados em nossos servidores — são usados apenas para calcular o resultado na sua tela. Ao compartilhar um link, os detalhes da sua seleção são codificados diretamente na URL desse link, não armazenados em um banco de dados.',
		collectTitle: 'Informações que coletamos',
		collectBody:
			'Como a maioria dos sites, nosso provedor de hospedagem registra automaticamente dados técnicos padrão para cada visita — como endereço IP, tipo de navegador, tipo de dispositivo, página de referência e páginas visualizadas — por segurança e para manter o Site funcionando de forma confiável. Também podemos usar análises focadas em privacidade para entender o tráfego agregado, como quais ferramentas são mais usadas e quais páginas são populares. Esses dados não são usados para identificar visitantes individuais.',
		cookiesTitle: 'Cookies',
		cookiesBody:
			'O Site não usa cookies para rastreá-lo em outros sites nem para criar perfis publicitários. Se isso mudar — por exemplo, se adicionarmos análises ou publicidade que dependam de cookies — atualizaremos esta política e forneceremos uma forma de controlar suas preferências.',
		thirdPartyTitle: 'Serviços de terceiros',
		thirdPartyBody:
			'Podemos usar serviços de terceiros para hospedagem, análise ou monitoramento de desempenho. Esses provedores podem processar dados técnicos (como os listados acima) sob suas próprias políticas de privacidade. Escolhemos provedores que não vendem dados pessoais e que não exigem criação de conta para usar este Site.',
		childrenTitle: 'Privacidade infantil',
		childrenBody: 'Este Site não é direcionado a crianças e não coletamos intencionalmente informações pessoais de crianças.',
		changesTitle: 'Alterações a esta política',
		changesBody:
			'Podemos atualizar esta política periodicamente. A data de "Última atualização" no topo desta página reflete a revisão mais recente.',
		contactTitle: 'Contato',
		contactBodyBefore: 'Perguntas sobre esta política podem ser enviadas para',
		contactBodyMiddle: ', ou através da nossa',
		contactLinkLabel: 'página de contato',
		contactBodyAfter: '.',
	},
	ko: {
		title: '개인정보 처리방침 — MeetingPlannerTimeZone',
		description: 'MeetingPlannerTimeZone의 개인정보 처리방침 — 사이트가 데이터, 쿠키, 분석을 처리하는 방식.',
		eyebrow: '개인정보 처리방침',
		h1: '개인정보 처리방침',
		lastUpdatedLabel: '최종 업데이트',
		intro:
			'MeetingPlannerTimeZone("당사")는 meetingplannertimezone.com("사이트")에서 무료 시간대 계획 도구를 제공합니다. 본 방침은 사이트가 수집하는 데이터와 그 사용 방식을 설명합니다.',
		shortTitle: '요약',
		shortBody:
			'계정은 존재하지 않으며, 이 사이트의 도구는 전적으로 브라우저 내에서 실행됩니다. 입력하신 도시, 날짜, 시간은 당사 서버로 전송되거나 저장되지 않으며, 화면에 결과를 계산하는 데만 사용됩니다. 링크를 공유하면 선택 항목의 세부 정보가 데이터베이스가 아닌 해당 링크의 URL 자체에 인코딩됩니다.',
		collectTitle: '수집하는 정보',
		collectBody:
			'대부분의 웹사이트와 마찬가지로, 당사 호스팅 제공업체는 보안 및 사이트의 안정적인 운영을 위해 IP 주소, 브라우저 유형, 기기 유형, 참조 페이지, 조회한 페이지 등 표준 기술 데이터를 모든 방문에 대해 자동으로 기록합니다. 또한 어떤 도구가 가장 많이 사용되는지, 어떤 페이지가 인기 있는지와 같은 전체 트래픽을 파악하기 위해 개인정보 보호에 중점을 둔 분석을 사용할 수도 있습니다. 이 데이터는 개별 방문자를 식별하는 데 사용되지 않습니다.',
		cookiesTitle: '쿠키',
		cookiesBody:
			'본 사이트는 다른 웹사이트에서 사용자를 추적하거나 광고 프로필을 작성하기 위해 쿠키를 사용하지 않습니다. 만약 이것이 변경된다면(예: 쿠키에 의존하는 분석이나 광고를 추가하는 경우) 본 방침을 업데이트하고 설정을 관리할 수 있는 방법을 제공하겠습니다.',
		thirdPartyTitle: '제3자 서비스',
		thirdPartyBody:
			'당사는 호스팅, 분석, 성능 모니터링을 위해 제3자 서비스를 이용할 수 있습니다. 이러한 제공업체는 자체 개인정보 처리방침에 따라 위에 나열된 것과 같은 기술 데이터를 처리할 수 있습니다. 당사는 개인 데이터를 판매하지 않고 이 사이트 이용에 계정 생성을 요구하지 않는 제공업체를 선택합니다.',
		childrenTitle: '아동의 개인정보',
		childrenBody: '본 사이트는 아동을 대상으로 하지 않으며, 당사는 아동의 개인정보를 고의로 수집하지 않습니다.',
		changesTitle: '본 방침의 변경',
		changesBody: '본 방침은 수시로 업데이트될 수 있습니다. 이 페이지 상단의 "최종 업데이트" 날짜는 가장 최근의 개정 사항을 반영합니다.',
		contactTitle: '문의',
		contactBodyBefore: '본 방침에 관한 문의는',
		contactBodyMiddle: '로 보내주시거나, 저희',
		contactLinkLabel: '문의 페이지',
		contactBodyAfter: '를 이용해 주세요.',
	},
	it: {
		title: 'Informativa sulla Privacy — MeetingPlannerTimeZone',
		description: "L'informativa sulla privacy di MeetingPlannerTimeZone — come il sito gestisce dati, cookie e analisi.",
		eyebrow: 'Informativa sulla privacy',
		h1: 'Informativa sulla privacy',
		lastUpdatedLabel: 'Ultimo aggiornamento',
		intro:
			'MeetingPlannerTimeZone ("noi") offre strumenti gratuiti di pianificazione dei fusi orari su meetingplannertimezone.com (il "Sito"). Questa informativa spiega quali dati raccoglie il Sito e come vengono utilizzati.',
		shortTitle: 'In breve',
		shortBody:
			"Non esistono account e gli strumenti di questo Sito funzionano interamente nel tuo browser. Le città, le date e gli orari che inserisci non vengono inviati né memorizzati sui nostri server — vengono usati solo per calcolare il risultato sullo schermo. Quando condividi un link, i dettagli della tua selezione vengono codificati direttamente nell'URL di quel link, non memorizzati in un database.",
		collectTitle: 'Informazioni che raccogliamo',
		collectBody:
			"Come la maggior parte dei siti web, il nostro provider di hosting registra automaticamente dati tecnici standard per ogni visita — come indirizzo IP, tipo di browser, tipo di dispositivo, pagina di provenienza e pagine visitate — per motivi di sicurezza e per mantenere il Sito funzionante in modo affidabile. Potremmo anche utilizzare analisi orientate alla privacy per comprendere il traffico aggregato, come quali strumenti vengono usati di più e quali pagine sono popolari. Questi dati non vengono usati per identificare singoli visitatori.",
		cookiesTitle: 'Cookie',
		cookiesBody:
			'Il Sito non utilizza cookie per tracciarti su altri siti web o per creare profili pubblicitari. Se questo dovesse cambiare — ad esempio, se aggiungessimo analisi o pubblicità basate sui cookie — aggiorneremo questa informativa e forniremo un modo per gestire le tue preferenze.',
		thirdPartyTitle: 'Servizi di terze parti',
		thirdPartyBody:
			'Potremmo utilizzare servizi di terze parti per hosting, analisi o monitoraggio delle prestazioni. Questi fornitori potrebbero elaborare dati tecnici (come quelli sopra elencati) secondo le proprie informative sulla privacy. Scegliamo fornitori che non vendono dati personali e che non richiedono la creazione di un account per utilizzare questo Sito.',
		childrenTitle: 'Privacy dei minori',
		childrenBody: 'Questo Sito non è rivolto ai minori e non raccogliamo consapevolmente informazioni personali dai minori.',
		changesTitle: 'Modifiche a questa informativa',
		changesBody:
			'Potremmo aggiornare questa informativa di tanto in tanto. La data di "Ultimo aggiornamento" in cima a questa pagina riflette la revisione più recente.',
		contactTitle: 'Contatti',
		contactBodyBefore: 'Le domande su questa informativa possono essere inviate a',
		contactBodyMiddle: ', oppure tramite la nostra',
		contactLinkLabel: 'pagina dei contatti',
		contactBodyAfter: '.',
	},
};
