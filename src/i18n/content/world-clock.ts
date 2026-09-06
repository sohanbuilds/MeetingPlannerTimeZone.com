export interface WorldClockContent {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	intro: string;
}

export const worldClockContent: Record<string, WorldClockContent> = {
	es: {
		title: 'Reloj Mundial para Reuniones — Hora Local Actual en Cualquier Ciudad',
		description:
			'Un reloj mundial para planificar reuniones que muestra la hora local actual en varias ciudades a la vez, actualizada en vivo, con día/noche de un vistazo — creado para planificar entre zonas horarias.',
		eyebrow: 'Reloj mundial',
		h1: '¿Qué hora es en el mundo?',
		intro: 'Añade cualquier ciudad para ver su hora local actual, actualizada en vivo, junto a la de los demás.',
	},
	ja: {
		title: '世界時計ミーティングプランナー — 世界各都市の現在時刻',
		description:
			'複数の都市の現在のローカル時間をリアルタイムで同時に表示する世界時計。昼夜が一目でわかり、タイムゾーンをまたいだ計画に役立ちます。',
		eyebrow: '世界時計',
		h1: '世界のいま何時?',
		intro: '都市を追加すると、その都市の現在時刻がリアルタイムで、他の都市と並べて表示されます。',
	},
	fr: {
		title: 'Horloge Mondiale pour Planifier des Réunions — Heure Locale Actuelle Dans N\'importe Quelle Ville',
		description:
			"Une horloge mondiale pour planifier des réunions qui affiche l'heure locale actuelle dans plusieurs villes à la fois, mise à jour en direct, avec le jour/nuit en un coup d'œil — conçue pour planifier entre fuseaux horaires.",
		eyebrow: 'Horloge mondiale',
		h1: 'Quelle heure est-il dans le monde ?',
		intro: "Ajoutez n'importe quelle ville pour voir son heure locale actuelle, mise à jour en direct, aux côtés de toutes les autres.",
	},
	de: {
		title: 'Weltuhr-Meetingplaner — Aktuelle Ortszeit in Jeder Stadt',
		description:
			'Eine Weltuhr für die Meetingplanung, die die aktuelle Ortszeit in mehreren Städten gleichzeitig anzeigt, live aktualisiert, mit Tag/Nacht auf einen Blick — gebaut für die Planung über Zeitzonen hinweg.',
		eyebrow: 'Weltuhr',
		h1: 'Wie spät ist es gerade weltweit?',
		intro: 'Füge beliebige Städte hinzu, um ihre aktuelle Ortszeit live aktualisiert neben allen anderen zu sehen.',
	},
	pt: {
		title: 'Relógio Mundial para Reuniões — Hora Local Atual em Qualquer Cidade',
		description:
			'Um relógio mundial para planejamento de reuniões que mostra a hora local atual em várias cidades ao mesmo tempo, atualizado ao vivo, com dia/noite à vista — feito para planejar entre fusos horários.',
		eyebrow: 'Relógio mundial',
		h1: 'Que horas são pelo mundo?',
		intro: 'Adicione qualquer cidade para ver sua hora local atual, atualizada ao vivo, ao lado de todas as outras.',
	},
	ko: {
		title: '세계 시계 미팅 플래너 — 전 세계 도시의 현재 현지 시간',
		description:
			'여러 도시의 현재 현지 시간을 실시간으로 한눈에 보여주는 세계 시계 — 낮과 밤을 한눈에 파악할 수 있어 시간대를 넘나드는 일정 조율에 유용합니다.',
		eyebrow: '세계 시계',
		h1: '지금 세계는 몇 시일까요?',
		intro: '원하는 도시를 추가하면 실시간으로 업데이트되는 현재 현지 시간을 다른 도시들과 나란히 볼 수 있습니다.',
	},
	it: {
		title: 'Orologio Mondiale per Riunioni — Ora Locale Attuale in Qualsiasi Città',
		description:
			"Un orologio mondiale per pianificare riunioni che mostra l'ora locale attuale in più città contemporaneamente, aggiornata in tempo reale, con giorno/notte a colpo d'occhio — pensato per pianificare tra fusi orari diversi.",
		eyebrow: 'Orologio mondiale',
		h1: 'Che ore sono nel mondo?',
		intro: "Aggiungi qualsiasi città per vedere la sua ora locale attuale, aggiornata in tempo reale, accanto a tutte le altre.",
	},
};
