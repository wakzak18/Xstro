import { bot } from '#src';
import { getRandom } from '#utils';
import { setAutoReactStatus, getAutoReactStatus } from '#sql';

bot(
  {
    pattern: 'areact',
    public: false,
    desc: 'Toggle Auto React On/Off',
    type: 'user',
  },
  async (message, match) => {
    const status = match === 'on';
    await setAutoReactStatus(status);
    await message.send(`_Autoreact turned ${status ? 'on' : 'off'}._`);
  }
);

bot(
  {
    on: 'text',
    dontAddCommandList: true,
  },
  async (message) => {
    const autoReactSetting = await getAutoReactStatus();
    if (autoReactSetting) {
      const emoji = getRandom(emojis);
      await message.react(emoji);
    }
  }
);

let emojis = [
  '💘',
  '💝',
  '💖',
  '💗',
  '💓',
  '💞',
  '💕',
  '💟',
  '❣️',
  '💔',
  '❤️',
  '🧡',
  '💛',
  '💚',
  '💙',
  '💜',
  '🤎',
  '🖤',
  '🤍',
  '❤️‍',
  '🔥',
  '❤️‍',
  '🩹',
  '💯',
  '♨️',
  '💢',
  '💬',
  '👁️‍🗨️',
  '🗨️',
  '🗯️',
  '💭',
  '💤',
  '🌐',
  '♠️',
  '♥️',
  '♦️',
  '♣️',
  '🃏',
  '🀄️',
  '🎴',
  '🎭️',
  '🔇',
  '🔈️',
  '🔉',
  '🔊',
  '🔔',
  '🔕',
  '🎼',
  '🎵',
  '🎶',
  '💹',
  '🏧',
  '🚮',
  '🚰',
  '♿️',
  '🚹️',
  '🚺️',
  '🚻',
  '🚼️',
  '🚾',
  '🛂',
  '🛃',
  '🛄',
  '🛅',
  '⚠️',
  '🚸',
  '⛔️',
  '🚫',
  '🚳',
  '🚭️',
  '🚯',
  '🚱',
  '🚷',
  '📵',
  '🔞',
  '☢️',
  '☣️',
  '⬆️',
  '↗️',
  '➡️',
  '↘️',
  '⬇️',
  '↙️',
  '⬅️',
  '↖️',
  '↕️',
  '↔️',
  '↩️',
  '↪️',
  '⤴️',
  '⤵️',
  '🔃',
  '🔄',
  '🔙',
  '🔚',
  '🔛',
  '🔜',
  '🔝',
  '🛐',
  '⚛️',
  '🕉️',
  '✡️',
  '☸️',
  '☯️',
  '✝️',
  '☦️',
  '☪️',
  '☮️',
  '🕎',
  '🔯',
  '♈️',
  '♉️',
  '♊️',
  '♋️',
  '♌️',
  '♍️',
  '♎️',
  '♏️',
  '♐️',
  '♑️',
  '♒️',
  '♓️',
  '⛎',
  '🔀',
  '🔁',
  '🔂',
  '▶️',
  '⏩️',
  '⏭️',
  '⏯️',
  '◀️',
  '⏪️',
  '⏮️',
  '🔼',
  '⏫',
  '🔽',
  '⏬',
  '⏸️',
  '⏹️',
  '⏺️',
  '⏏️',
  '🎦',
  '🔅',
  '🔆',
  '📶',
  '📳',
  '📴',
  '♀️',
  '♂️',
  '⚧',
  '✖️',
  '➕',
  '➖',
  '➗',
  '♾️',
  '‼️',
  '⁉️',
  '❓️',
  '❔',
  '❕',
  '❗️',
  '〰️',
  '💱',
  '💲',
  '⚕️',
  '♻️',
  '⚜️',
  '🔱',
  '📛',
  '🔰',
  '⭕️',
  '✅',
  '☑️',
  '✔️',
  '❌',
  '❎',
  '➰',
  '➿',
  '〽️',
  '✳️',
  '✴️',
  '❇️',
  '©️',
  '®️',
  '™️',
  '#️⃣',
  '*️⃣',
  '0️⃣',
  '1️⃣',
  '2️⃣',
  '3️⃣',
  '4️⃣',
  '5️⃣',
  '6️⃣',
  '7️⃣',
  '8️⃣',
  '9️⃣',
  '🔟',
  '🔠',
  '🔡',
  '🔢',
  '🔣',
  '🔤',
  '🅰️',
  '🆎',
  '🅱️',
  '🆑',
  '🆒',
  '🆓',
  'ℹ️',
  '🆔',
  'Ⓜ️',
  '🆕',
  '🆖',
  '🅾️',
  '🆗',
  '🅿️',
  '🆘',
  '🆙',
  '🆚',
  '🈁',
  '🈂️',
  '🈷️',
  '🈶',
  '🈯️',
  '🉐',
  '🈹',
  '🈚️',
  '🈲',
  '🉑',
  '🈸',
  '🈴',
  '🈳',
  '㊗️',
  '㊙️',
  '🈺',
  '🈵',
  '🔴',
  '🟠',
  '🟡',
  '🟢',
  '🔵',
  '🟣',
  '🟤',
  '⚫️',
  '⚪️',
  '🟥',
  '🟧',
  '🟨',
  '🟩',
  '🟦',
  '🟪',
  '🟫',
  '⬛️',
  '⬜️',
  '◼️',
  '◻️',
  '◾️',
  '◽️',
  '▪️',
  '▫️',
  '🔶',
  '🔷',
  '🔸',
  '🔹',
  '🔺',
  '🔻',
  '💠',
  '🔘',
  '🔳',
  '🔲',
  '🕛️',
  '🕧️',
  '🕐️',
  '🕜️',
  '🕑️',
  '🕝️',
  '🕒️',
  '🕞️',
  '🕓️',
  '🕟️',
  '🕔️',
  '🕠️',
  '🕕️',
  '🕡️',
  '🕖️',
  '🕢️',
  '🕗️',
  '🕣️',
  '🕘️',
  '🕤️',
  '🕙️',
  '🕥️',
  '🕚️',
  '🕦️',
  '*️',
  '#️',
  '0️',
  '1️',
  '2️',
  '3️',
  '4️',
  '5️',
  '6️',
  '7️',
  '8️',
  '9️',
  '🛎️',
  '🧳',
  '⌛️',
  '⏳️',
  '⌚️',
  '⏰',
  '⏱️',
  '⏲️',
  '🕰️',
  '🌡️',
  '🗺️',
  '🧭',
  '🎃',
  '🎄',
  '🧨',
  '🎈',
  '🎉',
  '🎊',
  '🎎',
  '🎏',
  '🎐',
  '🎀',
  '🎁',
  '🎗️',
  '🎟️',
  '🎫',
  '🔮',
  '🧿',
  '🎮️',
  '🕹️',
  '🎰',
  '🎲',
  '♟️',
  '🧩',
  '🧸',
  '🖼️',
  '🎨',
  '🧵',
  '🧶',
  '👓️',
  '🕶️',
  '🥽',
  '🥼',
  '🦺',
  '👔',
  '👕',
  '👖',
  '🧣',
  '🧤',
  '🧥',
  '🧦',
  '👗',
  '👘',
  '🥻',
  '🩱',
  '🩲',
  '🩳',
  '👙',
  '👚',
  '👛',
  '👜',
  '👝',
  '🛍️',
  '🎒',
  '👞',
  '👟',
  '🥾',
  '🥿',
  '👠',
  '👡',
  '🩰',
  '👢',
  '👑',
  '👒',
  '🎩',
  '🎓️',
  '🧢',
  '⛑️',
  '📿',
  '💄',
  '💍',
  '💎',
  '📢',
  '📣',
  '📯',
  '🎙️',
  '🎚️',
  '🎛️',
  '🎤',
  '🎧️',
  '📻️',
  '🎷',
  '🎸',
  '🎹',
  '🎺',
  '🎻',
  '🪕',
  '🥁',
  '📱',
  '📲',
  '☎️',
  '📞',
  '📟️',
  '📠',
  '🔋',
  '🔌',
  '💻️',
  '🖥️',
  '🖨️',
  '⌨️',
  '🖱️',
  '🖲️',
  '💽',
  '💾',
  '💿️',
  '📀',
  '🧮',
  '🎥',
  '🎞️',
  '📽️',
  '🎬️',
  '📺️',
  '📷️',
  '📸',
  '📹️',
  '📼',
  '🔍️',
  '🔎',
  '🕯️',
  '💡',
  '🔦',
  '🏮',
  '🪔',
  '📔',
  '📕',
  '📖',
  '📗',
  '📘',
  '📙',
  '📚️',
  '📓',
  '📒',
  '📃',
  '📜',
  '📄',
  '📰',
  '🗞️',
  '📑',
  '🔖',
  '🏷️',
  '💰️',
  '💴',
  '💵',
  '💶',
  '💷',
  '💸',
  '💳️',
  '🧾',
  '✉️',
  '💌',
  '📧',
  '🧧',
  '📨',
  '📩',
  '📤️',
  '📥️',
  '📦️',
  '📫️',
  '📪️',
  '📬️',
  '📭️',
  '📮',
  '🗳️',
  '✏️',
  '✒️',
  '🖋️',
  '🖊️',
  '🖌️',
  '🖍️',
  '📝',
  '💼',
  '📁',
  '📂',
  '🗂️',
  '📅',
  '📆',
  '🗒️',
  '🗓️',
  '📇',
  '📈',
  '📉',
  '📊',
  '📋️',
  '📌',
  '📍',
  '📎',
  '🖇️',
  '📏',
  '📐',
  '✂️',
  '🗃️',
  '🗄️',
  '🗑️',
  '🔒️',
  '🔓️',
  '🔏',
  '🔐',
  '🔑',
  '🗝️',
  '🔨',
  '🪓',
  '⛏️',
  '⚒️',
  '🛠️',
  '🗡️',
  '⚔️',
  '💣️',
  '🏹',
  '🛡️',
  '🔧',
  '🔩',
  '⚙️',
  '🗜️',
  '⚖️',
  '🦯',
  '🔗',
  '⛓️',
  '🧰',
  '🧲',
  '⚗️',
  '🧪',
  '🧫',
  '🧬',
  '🔬',
  '🔭',
  '📡',
  '💉',
  '🩸',
  '💊',
  '🩹',
  '🩺',
  '🚪',
  '🛏️',
  '🛋️',
  '🪑',
  '🚽',
  '🚿',
  '🛁',
  '🪒',
  '🧴',
  '🧷',
  '🧹',
  '🧺',
  '🧻',
  '🧼',
  '🧽',
  '🧯',
  '🛒',
  '🚬',
  '⚰️',
  '⚱️',
  '🏺',
  '🕳️',
  '🏔️',
  '⛰️',
  '🌋',
  '🗻',
  '🏕️',
  '🏖️',
  '🏜️',
  '🏝️',
  '🏟️',
  '🏛️',
  '🏗️',
  '🧱',
  '🏘️',
  '🏚️',
  '🏠️',
  '🏡',
  '🏢',
  '🏣',
  '🏤',
  '🏥',
  '🏦',
  '🏨',
  '🏩',
  '🏪',
  '🏫',
  '🏬',
  '🏭️',
  '🏯',
  '🏰',
  '💒',
  '🗼',
  '🗽',
  '⛪️',
  '🕌',
  '🛕',
  '🕍',
  '⛩️',
  '🕋',
  '⛲️',
  '⛺️',
  '🌁',
  '🌃',
  '🏙️',
  '🌄',
  '🌅',
  '🌆',
  '🌇',
  '🌉',
  '🗾',
  '🏞️',
  '🎠',
  '🎡',
  '🎢',
  '💈',
  '🎪',
  '🚂',
  '🚃',
  '🚄',
  '🚅',
  '🚆',
  '🚇️',
  '🚈',
  '🚉',
  '🚊',
  '🚝',
  '🚞',
  '🚋',
  '🚌',
  '🚍️',
  '🚎',
  '🚐',
  '🚑️',
  '🚒',
  '🚓',
  '🚔️',
  '🚕',
  '🚖',
  '🚗',
  '🚘️',
  '🚙',
  '🚚',
  '🚛',
  '🚜',
  '🏎️',
  '🏍️',
  '🛵',
  '🦽',
  '🦼',
  '🛺',
  '🚲️',
  '🛴',
  '🛹',
  '🚏',
  '🛣️',
  '🛤️',
  '🛢️',
  '⛽️',
  '🚨',
  '🚥',
  '🚦',
  '🛑',
  '🚧',
  '⚓️',
  '⛵️',
  '🛶',
  '🚤',
  '🛳️',
  '⛴️',
  '🛥️',
  '🚢',
  '✈️',
  '🛩️',
  '🛫',
  '🛬',
  '🪂',
  '💺',
  '🚁',
  '🚟',
  '🚠',
  '🚡',
  '🛰️',
  '🚀',
  '🛸',
  '🎆',
  '🎇',
  '🎑',
  '🗿',
  '⚽️',
  '⚾️',
  '🥎',
  '🏀',
  '🏐',
  '🏈',
  '🏉',
  '🎾',
  '🥏',
  '🎳',
  '🏏',
  '🏑',
  '🏒',
  '🥍',
  '🏓',
  '🏸',
  '🥊',
  '🥋',
  '🥅',
  '⛳️',
  '⛸️',
  '🎣',
  '🤿',
  '🎽',
  '🎿',
  '🛷',
  '🥌',
  '🎯',
  '🪀',
  '🪁',
  '🎱',
  '🎖️',
  '🏆️',
  '🏅',
  '🥇',
  '🥈',
  '🥉',
  '🍇',
  '🍈',
  '🍉',
  '🍊',
  '🍋',
  '🍌',
  '🍍',
  '🥭',
  '🍎',
  '🍏',
  '🍐',
  '🍑',
  '🍒',
  '🍓',
  '🥝',
  '🍅',
  '🥥',
  '🥑',
  '🍆',
  '🥔',
  '🥕',
  '🌽',
  '🌶️',
  '🥒',
  '🥬',
  '🥦',
  '🧄',
  '🧅',
  '🍄',
  '🥜',
  '🌰',
  '🍞',
  '🥐',
  '🥖',
  '🥨',
  '🥯',
  '🥞',
  '🧇',
  '🧀',
  '🍖',
  '🍗',
  '🥩',
  '🥓',
  '🍔',
  '🍟',
  '🍕',
  '🌭',
  '🥪',
  '🌮',
  '🌯',
  '🥙',
  '🧆',
  '🥚',
  '🍳',
  '🥘',
  '🍲',
  '🥣',
  '🥗',
  '🍿',
  '🧈',
  '🧂',
  '🥫',
  '🍱',
  '🍘',
  '🍙',
  '🍚',
  '🍛',
  '🍜',
  '🍝',
  '🍠',
  '🍢',
  '🍣',
  '🍤',
  '🍥',
  '🥮',
  '🍡',
  '🥟',
  '🥠',
  '🥡',
  '🍦',
  '🍧',
  '🍨',
  '🍩',
  '🍪',
  '🎂',
  '🍰',
  '🧁',
  '🥧',
  '🍫',
  '🍬',
  '🍭',
  '🍮',
  '🍯',
  '🍼',
  '🥛',
  '☕️',
  '🍵',
  '🍶',
  '🍾',
  '🍷',
  '🍸️',
  '🍹',
  '🍺',
  '🍻',
  '🥂',
  '🥃',
  '🥤',
  '🧃',
  '🧉',
  '🧊',
  '🥢',
  '🍽️',
  '🍴',
  '🥄',
  '🔪',
  '🐵',
  '🐒',
  '🦍',
  '🦧',
  '🐶',
  '🐕️',
  '🦮',
  '🐕‍',
  '🦺',
  '🐩',
  '🐺',
  '🦊',
  '🦝',
  '🐱',
  '🐈️',
  '🐈‍',
  '🦁',
  '🐯',
  '🐅',
  '🐆',
  '🐴',
  '🐎',
  '🦄',
  '🦓',
  '🦌',
  '🐮',
  '🐂',
  '🐃',
  '🐄',
  '🐷',
  '🐖',
  '🐗',
  '🐽',
  '🐏',
  '🐑',
  '🐐',
  '🐪',
  '🐫',
  '🦙',
  '🦒',
  '🐘',
  '🦏',
  '🦛',
  '🐭',
  '🐁',
  '🐀',
  '🐹',
  '🐰',
  '🐇',
  '🐿️',
  '🦔',
  '🦇',
  '🐻',
  '🐻‍',
  '❄️',
  '🐨',
  '🐼',
  '🦥',
  '🦦',
  '🦨',
  '🦘',
  '🦡',
  '🐾',
  '🦃',
  '🐔',
  '🐓',
  '🐣',
  '🐤',
  '🐥',
  '🐦️',
  '🐧',
  '🕊️',
  '🦅',
  '🦆',
  '🦢',
  '🦉',
  '🦩',
  '🦚',
  '🦜',
  '🐸',
  '🐊',
  '🐢',
  '🦎',
  '🐍',
  '🐲',
  '🐉',
  '🦕',
  '🦖',
  '🐳',
  '🐋',
  '🐬',
  '🐟️',
  '🐠',
  '🐡',
  '🦈',
  '🐙',
  '🦑',
  '🦀',
  '🦞',
  '🦐',
  '🦪',
  '🐚',
  '🐌',
  '🦋',
  '🐛',
  '🐜',
  '🐝',
  '🐞',
  '🦗',
  '🕷️',
  '🕸️',
  '🦂',
  '🦟',
  '🦠',
  '💐',
  '🌸',
  '💮',
  '🏵️',
  '🌹',
  '🥀',
  '🌺',
  '🌻',
  '🌼',
  '🌷',
  '🌱',
  '🌲',
  '🌳',
  '🌴',
  '🌵',
  '🎋',
  '🎍',
  '🌾',
  '🌿',
  '☘️',
  '🍀',
  '🍁',
  '🍂',
  '🍃',
  '🌍️',
  '🌎️',
  '🌏️',
  '🌑',
  '🌒',
  '🌓',
  '🌔',
  '🌕️',
  '🌖',
  '🌗',
  '🌘',
  '🌙',
  '🌚',
  '🌛',
  '🌜️',
  '☀️',
  '🌝',
  '🌞',
  '🪐',
  '💫',
  '⭐️',
  '🌟',
  '✨',
  '🌠',
  '🌌',
  '☁️',
  '⛅️',
  '⛈️',
  '🌤️',
  '🌥️',
  '🌦️',
  '🌧️',
  '🌨️',
  '🌩️',
  '🌪️',
  '🌫️',
  '🌬️',
  '🌀',
  '🌈',
  '🌂',
  '☂️',
  '☔️',
  '⛱️',
  '⚡️',
  '❄️',
  '☃️',
  '⛄️',
  '☄️',
  '🔥',
  '💧',
  '🌊',
  '💥',
  '💦',
  '💨',
  '😀',
  '😃',
  '😄',
  '😁',
  '😆',
  '😅',
  '🤣',
  '😂',
  '🙂',
  '🙃',
  '😉',
  '😊',
  '😇',
  '🥰',
  '😍',
  '🤩',
  '😘',
  '😗',
  '☺️',
  '😚',
  '😙',
  '😋',
  '😛',
  '😜',
  '🤪',
  '😝',
  '🤑',
  '🤗',
  '🤭',
  '🤫',
  '🤔',
  '🤐',
  '🤨',
  '😐️',
  '😑',
  '😶',
  '😏',
  '😒',
  '🙄',
  '😬',
  '🤥',
  '😌',
  '😔',
  '😪',
  '😮‍',
  '💨',
  '🤤',
  '😴',
  '😷',
  '🤒',
  '🤕',
  '🤢',
  '🤮',
  '🤧',
  '🥵',
  '🥶',
  '😶‍',
  '🌫️',
  '🥴',
  '😵‍',
  '💫',
  '😵',
  '🤯',
  '🤠',
  '🥳',
  '😎',
  '🤓',
  '🧐',
  '😕',
  '😟',
  '🙁',
  '☹️',
  '😮',
  '😯',
  '😲',
  '😳',
  '🥺',
  '😦',
  '😧',
  '😨',
  '😰',
  '😥',
  '😢',
  '😭',
  '😱',
  '😖',
  '😣',
  '😞',
  '😓',
  '😩',
  '😫',
  '🥱',
  '😤',
  '😡',
  '😠',
  '🤬',
  '😈',
  '👿',
  '💀',
  '☠️',
  '💩',
  '🤡',
  '👹',
  '👺',
  '👻',
  '👽️',
  '👾',
  '🤖',
  '😺',
  '😸',
  '😹',
  '😻',
  '😼',
  '😽',
  '🙀',
  '😿',
  '😾',
  '🙈',
  '🙉',
  '🙊',
  '👋',
  '🤚',
  '🖐️',
  '✋',
  '🖖',
  '👌',
  '🤏',
  '✌️',
  '🤞',
  '🤟',
  '🤘',
  '🤙',
  '👈️',
  '👉️',
  '👆️',
  '🖕',
  '👇️',
  '☝️',
  '👍️',
  '👎️',
  '✊',
  '👊',
  '🤛',
  '🤜',
  '👏',
  '🙌',
  '👐',
  '🤲',
  '🤝',
  '🙏',
  '✍️',
  '💅',
  '🤳',
  '💪',
  '🦾',
  '🦿',
  '🦵',
  '🦶',
  '👂️',
  '🦻',
  '👃',
  '🧠',
  '🦷',
  '🦴',
  '👀',
  '👁️',
  '👅',
  '👄',
  '💋',
  '👶',
  '🧒',
  '👦',
  '👧',
  '🧑',
  '👨',
  '👩',
  '🧔',
  '🧔‍♀️',
  '🧔‍♂️',
  '🧑',
  '👨‍',
  '🦰',
  '👩‍',
  '🦰',
  '🧑',
  '👨‍',
  '🦱',
  '👩‍',
  '🦱',
  '🧑',
  '👨‍',
  '🦳',
  '👩‍',
  '🦳',
  '🧑',
  '👨‍',
  '🦲',
  '👩‍',
  '🦲',
  '👱',
  '👱‍♂️',
  '👱‍♀️',
  '🧓',
  '👴',
  '👵',
  '🙍',
  '🙍‍♂️',
  '🙍‍♀️',
  '🙎',
  '🙎‍♂️',
  '🙎‍♀️',
  '🙅',
  '🙅‍♂️',
  '🙅‍♀️',
  '🙆',
  '🙆‍♂️',
  '🙆‍♀️',
  '💁',
  '💁‍♂️',
  '💁‍♀️',
  '🙋',
  '🙋‍♂️',
  '🙋‍♀️',
  '🧏',
  '🧏‍♂️',
  '🧏‍♀️',
  '🙇',
  '🙇‍♂️',
  '🙇‍♀️',
  '🤦',
  '🤦‍♂️',
  '🤦‍♀️',
  '🤷',
  '🤷‍♂️',
  '🤷‍♀️',
  '🧑‍⚕️',
  '👨‍⚕️',
  '👩‍⚕️',
  '🧑‍🎓',
  '👨‍🎓',
  '👩‍🎓',
  '🧑‍🏫',
  '👨‍🏫',
  '👩‍🏫',
  '🧑‍⚖️',
  '👨‍⚖️',
  '👩‍⚖️',
  '🧑‍🌾',
  '👨‍🌾',
  '👩‍🌾',
  '🧑‍🍳',
  '👨‍🍳',
  '👩‍🍳',
  '🧑‍🔧',
  '👨‍🔧',
  '👩‍🔧',
  '🧑‍🏭',
  '👨‍🏭',
  '👩‍🏭',
  '🧑‍💼',
  '👨‍💼',
  '👩‍💼',
  '🧑‍🔬',
  '👨‍🔬',
  '👩‍🔬',
  '🧑‍💻',
  '👨‍💻',
  '👩‍💻',
  '🧑‍🎤',
  '👨‍🎤',
  '👩‍🎤',
  '🧑‍🎨',
  '👨‍🎨',
  '👩‍🎨',
  '🧑‍✈️',
  '👨‍✈️',
  '👩‍✈️',
  '🧑‍🚀',
  '👨‍🚀',
  '👩‍🚀',
  '🧑‍🚒',
  '👨‍🚒',
  '👩‍🚒',
  '👮',
  '👮‍♂️',
  '👮‍♀️',
  '🕵️',
  '🕵️‍♂️',
  '🕵️‍♀️',
  '💂',
  '💂‍♂️',
  '💂‍♀️',
  '👷',
  '👷‍♂️',
  '👷‍♀️',
  '🤴',
  '👸',
  '👳',
  '👳‍♂️',
  '👳‍♀️',
  '👲',
  '🧕',
  '🤵',
  '🤵‍♂️',
  '🤵‍♀️',
  '👰',
  '👰‍♂️',
  '👰‍♀️',
  '🤰',
  '🤱',
  '👩‍',
  '🍼',
  '👨‍',
  '🍼',
  '🧑‍',
  '🍼',
  '👼',
  '🎅',
  '🤶',
  '🧑‍',
  '🎄',
  '🦸',
  '🦸‍♂️',
  '🦸‍♀️',
  '🦹',
  '🦹‍♂️',
  '🦹‍♀️',
  '🧙',
  '🧙‍♂️',
  '🧙‍♀️',
  '🧚',
  '🧚‍♂️',
  '🧚‍♀️',
  '🧛',
  '🧛‍♂️',
  '🧛‍♀️',
  '🧜',
  '🧜‍♂️',
  '🧜‍♀️',
  '🧝',
  '🧝‍♂️',
  '🧝‍♀️',
  '🧞',
  '🧞‍♂️',
  '🧞‍♀️',
  '🧟',
  '🧟‍♂️',
  '🧟‍♀️',
  '💆',
  '💆‍♂️',
  '💆‍♀️',
  '💇',
  '💇‍♂️',
  '💇‍♀️',
  '🚶',
  '🚶‍♂️',
  '🚶‍♀️',
  '🧍',
  '🧍‍♂️',
  '🧍‍♀️',
  '🧎',
  '🧎‍♂️',
  '🧎‍♀️',
  '🧑‍',
  '🦯',
  '👨‍',
  '🦯',
  '👩‍',
  '🦯',
  '🧑‍',
  '🦼',
  '👨‍',
  '🦼',
  '👩‍',
  '🦼',
  '🧑‍',
  '🦽',
  '👨‍',
  '🦽',
  '👩‍',
  '🦽',
  '🏃',
  '🏃‍♂️',
  '🏃‍♀️',
  '💃',
  '🕺',
  '🕴️',
  '👯',
  '👯‍♂️',
  '👯‍♀️',
  '🧖',
  '🧖‍♂️',
  '🧖‍♀️',
  '🧗',
  '🧗‍♂️',
  '🧗‍♀️',
  '🤺',
  '🏇',
  '⛷️',
  '🏂️',
  '🏌️',
  '🏌️‍♂️',
  '🏌️‍♀️',
  '🏄️',
  '🏄‍♂️',
  '🏄‍♀️',
  '🚣',
  '🚣‍♂️',
  '🚣‍♀️',
  '🏊️',
  '🏊‍♂️',
  '🏊‍♀️',
  '⛹️',
  '⛹️‍♂️',
  '⛹️‍♀️',
  '🏋️',
  '🏋️‍♂️',
  '🏋️‍♀️',
  '🚴',
  '🚴‍♂️',
  '🚴‍♀️',
  '🚵',
  '🚵‍♂️',
  '🚵‍♀️',
  '🤸',
  '🤸‍♂️',
  '🤸‍♀️',
  '🤼',
  '🤼‍♂️',
  '🤼‍♀️',
  '🤽',
  '🤽‍♂️',
  '🤽‍♀️',
  '🤾',
  '🤾‍♂️',
  '🤾‍♀️',
  '🤹',
  '🤹‍♂️',
  '🤹‍♀️',
  '🧘',
  '🧘‍♂️',
  '🧘‍♀️',
  '🛀',
  '🛌',
  '🧑‍',
  '🤝‍',
  '🧑',
  '👭',
  '👫',
  '👬',
  '💏',
  '👩‍❤️‍💋‍👨',
  '👨‍❤️‍💋‍👨',
  '👩‍❤️‍💋‍👩',
  '💑',
  '👩‍❤️‍👨',
  '👨‍❤️‍👨',
  '👩‍❤️‍👩',
  '👪️',
  '👨‍👩‍👦',
  '👨‍👩‍👧',
  '👨‍👩‍👧‍👦',
  '👨‍👩‍👦‍👦',
  '👨‍👩‍👧‍👧',
  '👨‍👨‍👦',
  '👨‍👨‍👧',
  '👨‍👨‍👧‍👦',
  '👨‍👨‍👦‍👦',
  '👨‍👨‍👧‍👧',
  '👩‍👩‍👦',
  '👩‍👩‍👧',
  '👩‍👩‍👧‍👦',
  '👩‍👩‍👦‍👦',
  '👩‍👩‍👧‍👧',
  '👨‍👦',
  '👨‍👦‍👦',
  '👨‍👧',
  '👨‍👧‍👦',
  '👨‍👧‍👧',
  '👩‍👦',
  '👩‍👦‍👦',
  '👩‍👧',
  '👩‍👧‍👦',
  '👩‍👧‍👧',
  '🗣️',
  '👤',
  '👥',
  '👣',
];
