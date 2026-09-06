export interface TermsContent {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	lastUpdatedLabel: string;
	intro: string;
	useTitle: string;
	useBody: string;
	warrantyTitle: string;
	warrantyBody: string;
	liabilityTitle: string;
	liabilityBody: string;
	ipTitle: string;
	ipBody: string;
	changesTitle: string;
	changesBody: string;
	contactTitle: string;
	contactBodyBefore: string;
	contactBodyMiddle: string;
	contactLinkLabel: string;
	contactBodyAfter: string;
}

export const termsContent: Record<string, TermsContent> = {
	es: {
		title: 'Términos y Condiciones — MeetingPlannerTimeZone',
		description: 'Términos y condiciones para usar las herramientas gratuitas de planificación de zonas horarias de MeetingPlannerTimeZone.',
		eyebrow: 'Términos y condiciones',
		h1: 'Términos y condiciones',
		lastUpdatedLabel: 'Última actualización',
		intro:
			'Al usar meetingplannertimezone.com (el "Sitio"), aceptas estos términos. Si no estás de acuerdo, por favor no uses el Sitio.',
		useTitle: 'Uso del Sitio',
		useBody:
			'El Sitio se ofrece de forma gratuita para uso personal y profesional en la planificación de reuniones y llamadas entre zonas horarias. No puedes usar el Sitio de ninguna manera que interrumpa su funcionamiento, intentar acceder a él por medios automatizados que generen una carga excesiva, ni usarlo para ningún propósito ilegal.',
		warrantyTitle: 'Sin garantía',
		warrantyBody:
			'El Sitio se ofrece "tal cual" y "según disponibilidad", sin garantías de ningún tipo, expresas o implícitas. Las reglas de zonas horarias, los cambios de horario de verano y los datos de ciudades pueden cambiar, y aunque buscamos precisión, no garantizamos que cada cálculo, desfase o listado de ciudad esté libre de errores o actualizado. Eres responsable de confirmar de forma independiente los horarios importantes de tus reuniones, especialmente en torno a los cambios de horario de verano.',
		liabilityTitle: 'Limitación de responsabilidad',
		liabilityBody:
			'En la máxima medida permitida por la ley, no somos responsables de reuniones perdidas, errores de programación u otros daños derivados de tu uso, o incapacidad de uso, del Sitio.',
		ipTitle: 'Propiedad intelectual',
		ipBody:
			'El diseño, el código y la marca del Sitio pertenecen a sus respectivos propietarios. Los datos públicos de ciudades y zonas horarias usados por las herramientas provienen de fuentes abiertas y se usan bajo sus respectivas licencias.',
		changesTitle: 'Cambios en el Sitio o en estos términos',
		changesBody:
			'Podemos actualizar estos términos, o cambiar, suspender o interrumpir cualquier parte del Sitio, en cualquier momento. El uso continuado del Sitio después de que los cambios entren en vigor significa que aceptas los términos actualizados.',
		contactTitle: 'Contacto',
		contactBodyBefore: 'Las preguntas sobre estos términos pueden enviarse a',
		contactBodyMiddle: ', o a través de nuestra',
		contactLinkLabel: 'página de contacto',
		contactBodyAfter: '.',
	},
	ja: {
		title: '利用規約 — MeetingPlannerTimeZone',
		description: 'MeetingPlannerTimeZoneの無料タイムゾーン計画ツールを利用するための利用規約。',
		eyebrow: '利用規約',
		h1: '利用規約',
		lastUpdatedLabel: '最終更新日',
		intro: 'meetingplannertimezone.com(「本サイト」)を利用することで、本規約に同意したものとみなされます。同意されない場合は、本サイトをご利用にならないでください。',
		useTitle: '本サイトの利用',
		useBody:
			'本サイトは、タイムゾーンをまたいだ会議や通話の計画のため、個人・業務利用を問わず無料で提供されています。本サイトの運用を妨げるような方法での利用、過度な負荷をかける自動化手段によるアクセス、または違法な目的での利用はできません。',
		warrantyTitle: '保証なし',
		warrantyBody:
			'本サイトは、明示または黙示を問わずいかなる種類の保証もなく、「現状のまま」「利用可能な範囲で」提供されます。タイムゾーンのルール、サマータイムの切り替え、都市データは変更されることがあり、正確性を追求してはいますが、すべての計算、オフセット、都市リストが誤りなく最新であることを保証するものではありません。特にサマータイムの切り替え時期には、重要な会議時間はご自身で個別に確認する責任があります。',
		liabilityTitle: '責任の制限',
		liabilityBody: '法律で認められる最大限の範囲において、本サイトの利用または利用不能に起因する会議の見逃し、スケジュールの誤り、その他の損害について、当社は責任を負いません。',
		ipTitle: '知的財産',
		ipBody: '本サイトのデザイン、コード、ブランドは、それぞれの権利者に帰属します。ツールで使用される公開の都市・タイムゾーンデータはオープンソースから取得され、それぞれのライセンスの下で使用されています。',
		changesTitle: '本サイトまたは本規約の変更',
		changesBody: '当社は、いつでも本規約を更新したり、本サイトの一部を変更、停止、または終了したりすることがあります。変更が発効した後も本サイトを利用し続けることは、更新された規約に同意したことを意味します。',
		contactTitle: 'お問い合わせ',
		contactBodyBefore: '本規約に関するご質問は',
		contactBodyMiddle: '宛て、または',
		contactLinkLabel: 'お問い合わせページ',
		contactBodyAfter: 'よりお送りください。',
	},
	fr: {
		title: 'Conditions Générales — MeetingPlannerTimeZone',
		description:
			"Conditions générales d'utilisation des outils gratuits de planification de fuseaux horaires de MeetingPlannerTimeZone.",
		eyebrow: 'Conditions générales',
		h1: 'Conditions générales',
		lastUpdatedLabel: 'Dernière mise à jour',
		intro:
			'En utilisant meetingplannertimezone.com (le « Site »), vous acceptez ces conditions. Si vous n\'êtes pas d\'accord, veuillez ne pas utiliser le Site.',
		useTitle: 'Utilisation du Site',
		useBody:
			"Le Site est fourni gratuitement pour un usage personnel et professionnel dans la planification de réunions et d'appels entre fuseaux horaires. Vous ne pouvez pas utiliser le Site d'une manière qui perturbe son fonctionnement, tenter d'y accéder par des moyens automatisés qui lui imposent une charge déraisonnable, ni l'utiliser à des fins illégales.",
		warrantyTitle: 'Aucune garantie',
		warrantyBody:
			"Le Site est fourni « tel quel » et « selon disponibilité », sans garantie d'aucune sorte, explicite ou implicite. Les règles de fuseaux horaires, les changements d'heure d'été et les données de villes peuvent changer, et bien que nous visions l'exactitude, nous ne garantissons pas que chaque calcul, décalage ou liste de villes soit exempt d'erreurs ou à jour. Vous êtes responsable de confirmer indépendamment les horaires importants de vos réunions, en particulier lors des changements d'heure d'été.",
		liabilityTitle: 'Limitation de responsabilité',
		liabilityBody:
			"Dans toute la mesure permise par la loi, nous ne sommes pas responsables des réunions manquées, des erreurs de planification ou d'autres dommages résultant de votre utilisation, ou de votre incapacité à utiliser, le Site.",
		ipTitle: 'Propriété intellectuelle',
		ipBody:
			"La conception, le code et la marque du Site appartiennent à leurs propriétaires respectifs. Les données publiques de villes et de fuseaux horaires utilisées par les outils proviennent de sources ouvertes et sont utilisées sous leurs licences respectives.",
		changesTitle: 'Modifications du Site ou de ces conditions',
		changesBody:
			"Nous pouvons mettre à jour ces conditions, ou modifier, suspendre ou interrompre toute partie du Site, à tout moment. La poursuite de l'utilisation du Site après l'entrée en vigueur des modifications signifie que vous acceptez les conditions mises à jour.",
		contactTitle: 'Contact',
		contactBodyBefore: 'Les questions concernant ces conditions peuvent être envoyées à',
		contactBodyMiddle: ', ou via notre',
		contactLinkLabel: 'page de contact',
		contactBodyAfter: '.',
	},
	de: {
		title: 'Allgemeine Geschäftsbedingungen — MeetingPlannerTimeZone',
		description: 'Allgemeine Geschäftsbedingungen für die Nutzung der kostenlosen Zeitzonen-Planungstools von MeetingPlannerTimeZone.',
		eyebrow: 'Allgemeine Geschäftsbedingungen',
		h1: 'Allgemeine Geschäftsbedingungen',
		lastUpdatedLabel: 'Zuletzt aktualisiert',
		intro:
			'Durch die Nutzung von meetingplannertimezone.com (die "Seite") stimmst du diesen Bedingungen zu. Wenn du nicht einverstanden bist, nutze die Seite bitte nicht.',
		useTitle: 'Nutzung der Seite',
		useBody:
			'Die Seite wird kostenlos für die persönliche und berufliche Nutzung bei der Planung von Meetings und Anrufen über Zeitzonen hinweg bereitgestellt. Du darfst die Seite nicht auf eine Weise nutzen, die ihren Betrieb stört, nicht versuchen, über automatisierte Mittel darauf zuzugreifen, die eine unangemessene Last verursachen, und sie nicht für rechtswidrige Zwecke nutzen.',
		warrantyTitle: 'Keine Gewährleistung',
		warrantyBody:
			'Die Seite wird "wie besehen" und "wie verfügbar" bereitgestellt, ohne Gewährleistungen jeglicher Art, weder ausdrücklich noch stillschweigend. Zeitzonenregeln, Sommerzeit-Umstellungen und Städtedaten können sich ändern, und obwohl wir auf Genauigkeit abzielen, garantieren wir nicht, dass jede Berechnung, jeder Offset oder jede Städteliste fehlerfrei oder aktuell ist. Du bist dafür verantwortlich, wichtige Besprechungszeiten unabhängig zu bestätigen, insbesondere rund um Sommerzeit-Umstellungen.',
		liabilityTitle: 'Haftungsbeschränkung',
		liabilityBody:
			'Im gesetzlich zulässigen Umfang haften wir nicht für verpasste Meetings, Terminierungsfehler oder andere Schäden, die aus deiner Nutzung oder Unfähigkeit zur Nutzung der Seite entstehen.',
		ipTitle: 'Geistiges Eigentum',
		ipBody:
			'Das Design, der Code und das Branding der Seite gehören den jeweiligen Eigentümern. Öffentliche Stadt- und Zeitzonendaten, die von den Tools verwendet werden, stammen aus offenen Quellen und werden unter deren jeweiligen Lizenzen genutzt.',
		changesTitle: 'Änderungen an der Seite oder diesen Bedingungen',
		changesBody:
			'Wir können diese Bedingungen jederzeit aktualisieren oder jeden Teil der Seite ändern, aussetzen oder einstellen. Die fortgesetzte Nutzung der Seite nach Inkrafttreten von Änderungen bedeutet, dass du die aktualisierten Bedingungen akzeptierst.',
		contactTitle: 'Kontakt',
		contactBodyBefore: 'Fragen zu diesen Bedingungen können gesendet werden an',
		contactBodyMiddle: ', oder über unsere',
		contactLinkLabel: 'Kontaktseite',
		contactBodyAfter: '.',
	},
	pt: {
		title: 'Termos e Condições — MeetingPlannerTimeZone',
		description: 'Termos e condições para usar as ferramentas gratuitas de planejamento de fuso horário da MeetingPlannerTimeZone.',
		eyebrow: 'Termos e condições',
		h1: 'Termos e condições',
		lastUpdatedLabel: 'Última atualização',
		intro:
			'Ao usar meetingplannertimezone.com (o "Site"), você concorda com estes termos. Se você não concorda, por favor não use o Site.',
		useTitle: 'Uso do Site',
		useBody:
			'O Site é fornecido gratuitamente para uso pessoal e profissional no planejamento de reuniões e ligações entre fusos horários. Você não pode usar o Site de forma que interrompa sua operação, tentar acessá-lo por meios automatizados que imponham carga excessiva, nem usá-lo para fins ilegais.',
		warrantyTitle: 'Sem garantia',
		warrantyBody:
			'O Site é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas. Regras de fuso horário, mudanças de horário de verão e dados de cidades podem mudar, e embora busquemos precisão, não garantimos que cada cálculo, deslocamento ou lista de cidades esteja livre de erros ou atualizado. Você é responsável por confirmar de forma independente horários importantes de reuniões, especialmente em torno de mudanças de horário de verão.',
		liabilityTitle: 'Limitação de responsabilidade',
		liabilityBody:
			'Na máxima extensão permitida por lei, não somos responsáveis por reuniões perdidas, erros de agendamento ou outros danos decorrentes do seu uso, ou incapacidade de uso, do Site.',
		ipTitle: 'Propriedade intelectual',
		ipBody:
			'O design, o código e a marca do Site pertencem aos seus respectivos proprietários. Dados públicos de cidades e fusos horários usados pelas ferramentas vêm de fontes abertas e são usados sob suas respectivas licenças.',
		changesTitle: 'Alterações ao Site ou a estes termos',
		changesBody:
			'Podemos atualizar estes termos, ou alterar, suspender ou descontinuar qualquer parte do Site, a qualquer momento. O uso continuado do Site após as alterações entrarem em vigor significa que você aceita os termos atualizados.',
		contactTitle: 'Contato',
		contactBodyBefore: 'Perguntas sobre estes termos podem ser enviadas para',
		contactBodyMiddle: ', ou através da nossa',
		contactLinkLabel: 'página de contato',
		contactBodyAfter: '.',
	},
	ko: {
		title: '이용약관 — MeetingPlannerTimeZone',
		description: 'MeetingPlannerTimeZone의 무료 시간대 계획 도구 이용을 위한 이용약관입니다.',
		eyebrow: '이용약관',
		h1: '이용약관',
		lastUpdatedLabel: '최종 업데이트',
		intro: 'meetingplannertimezone.com("사이트")을 이용함으로써 귀하는 본 약관에 동의하게 됩니다. 동의하지 않으시면 본 사이트를 이용하지 마시기 바랍니다.',
		useTitle: '사이트 이용',
		useBody:
			'본 사이트는 시간대를 넘나드는 회의 및 통화 계획을 위해 개인 및 업무용으로 무료로 제공됩니다. 귀하는 사이트 운영을 방해하는 방식으로 이용하거나, 과도한 부하를 초래하는 자동화된 수단으로 접근을 시도하거나, 불법적인 목적으로 이용할 수 없습니다.',
		warrantyTitle: '보증 없음',
		warrantyBody:
			'본 사이트는 명시적이든 묵시적이든 어떠한 종류의 보증 없이 "있는 그대로" 및 "제공 가능한 범위 내에서" 제공됩니다. 시간대 규칙, 서머타임 전환, 도시 데이터는 변경될 수 있으며, 정확성을 추구하지만 모든 계산, 오프셋 또는 도시 목록이 오류 없이 최신 상태임을 보장하지 않습니다. 특히 서머타임 전환 시기에는 중요한 회의 시간을 독립적으로 확인할 책임이 귀하에게 있습니다.',
		liabilityTitle: '책임 제한',
		liabilityBody: '법률이 허용하는 최대 범위 내에서, 당사는 귀하의 사이트 이용 또는 이용 불능으로 인해 발생하는 회의 누락, 일정 오류 또는 기타 손해에 대해 책임을 지지 않습니다.',
		ipTitle: '지적 재산권',
		ipBody: '사이트의 디자인, 코드, 브랜딩은 각 소유자에게 귀속됩니다. 도구에서 사용되는 공개 도시 및 시간대 데이터는 오픈 소스에서 제공되며 각 라이선스에 따라 사용됩니다.',
		changesTitle: '사이트 또는 본 약관의 변경',
		changesBody: '당사는 언제든지 본 약관을 업데이트하거나 사이트의 일부를 변경, 중단 또는 종료할 수 있습니다. 변경 사항이 발효된 후에도 사이트를 계속 이용하는 것은 업데이트된 약관에 동의함을 의미합니다.',
		contactTitle: '문의',
		contactBodyBefore: '본 약관에 관한 문의는',
		contactBodyMiddle: '로 보내주시거나, 저희',
		contactLinkLabel: '문의 페이지',
		contactBodyAfter: '를 이용해 주세요.',
	},
	it: {
		title: 'Termini e Condizioni — MeetingPlannerTimeZone',
		description: "Termini e condizioni per l'utilizzo degli strumenti gratuiti di pianificazione dei fusi orari di MeetingPlannerTimeZone.",
		eyebrow: 'Termini e condizioni',
		h1: 'Termini e condizioni',
		lastUpdatedLabel: 'Ultimo aggiornamento',
		intro:
			'Utilizzando meetingplannertimezone.com (il "Sito"), accetti questi termini. Se non sei d\'accordo, ti preghiamo di non utilizzare il Sito.',
		useTitle: 'Utilizzo del Sito',
		useBody:
			'Il Sito è fornito gratuitamente per uso personale e professionale nella pianificazione di riunioni e chiamate tra fusi orari. Non puoi utilizzare il Sito in alcun modo che ne interrompa il funzionamento, tentare di accedervi tramite mezzi automatizzati che impongano un carico eccessivo, né usarlo per scopi illegali.',
		warrantyTitle: 'Nessuna garanzia',
		warrantyBody:
			'Il Sito è fornito "così com\'è" e "come disponibile", senza garanzie di alcun tipo, espresse o implicite. Le regole sui fusi orari, i cambi dell\'ora legale e i dati sulle città possono cambiare, e sebbene puntiamo all\'accuratezza, non garantiamo che ogni calcolo, offset o elenco di città sia privo di errori o aggiornato. Sei responsabile di confermare autonomamente gli orari importanti delle riunioni, specialmente in prossimità dei cambi dell\'ora legale.',
		liabilityTitle: 'Limitazione di responsabilità',
		liabilityBody:
			'Nella misura massima consentita dalla legge, non siamo responsabili per riunioni mancate, errori di pianificazione o altri danni derivanti dall\'uso, o dall\'impossibilità di utilizzo, del Sito.',
		ipTitle: 'Proprietà intellettuale',
		ipBody:
			'Il design, il codice e il marchio del Sito appartengono ai rispettivi proprietari. I dati pubblici su città e fusi orari utilizzati dagli strumenti provengono da fonti aperte e sono utilizzati secondo le rispettive licenze.',
		changesTitle: 'Modifiche al Sito o a questi termini',
		changesBody:
			'Potremmo aggiornare questi termini, o modificare, sospendere o interrompere qualsiasi parte del Sito, in qualsiasi momento. L\'uso continuato del Sito dopo l\'entrata in vigore delle modifiche significa che accetti i termini aggiornati.',
		contactTitle: 'Contatti',
		contactBodyBefore: 'Le domande su questi termini possono essere inviate a',
		contactBodyMiddle: ', oppure tramite la nostra',
		contactLinkLabel: 'pagina dei contatti',
		contactBodyAfter: '.',
	},
};
