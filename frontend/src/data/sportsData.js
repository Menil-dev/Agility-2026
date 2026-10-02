export const sportsData = [
  {
    id: 'volleyball',
    title: 'Volleyball',
    image: '/uploads/volleyball.jpg',
    tagline: 'Spike through the defense, dominate the net',
    fee: '₹799 / Team',
    teamSize: '6 + 2 optional, 1 girl minimum',
    maxPlayers: 8,
    type: 'Team',
    date: '6-7 October 2026',
    dateDisplay: '6-7 Oct 2026',
    venue: 'SPIT Volleyball Court',
    description: 'High-jumping, hard-spiking outdoor volleyball championship for college squads.',
    rules: [
      'Rally point scoring system (Best of 3 sets of 25 points).',
      'Net touches and line foot faults strictly monitored.',
      'Libero rotation allowed as per standard FIVB rules.'
    ],
    prizes: '₹8,000',
    popular: true,
    formLink: 'https://forms.gle/i9ZjWHo2qTnpNFz47',
    variants: [
      { name: 'Volleyball Team', fee: '₹799' }
    ]
  },
  {
    id: 'table-tennis',
    title: 'Table Tennis',
    image: '/uploads/table-tennis.jpg',
    tagline: 'Lightning-fast spin and razor-sharp reflexes',
    fee: '₹99 – ₹149',
    teamSize: '1 or 2 Players',
    maxPlayers: 2,
    type: 'Solo/Doubles',
    date: '8, 11 October 2026',
    dateDisplay: '8 & 11 Oct 2026',
    venue: 'SPIT Student Activity Center',
    description: 'High-speed indoor table tennis championship for singles and doubles categories.',
    rules: [
      'Best of 5 sets of 11 points each.',
      'ITTF approved 40+ 3-star balls provided.',
      'Players must bring their own ITTF rubber racquets.'
    ],
    prizes: '₹4,000',
    popular: false,
    formLink: 'https://forms.gle/xUEEHY6cjMUEXb8z5',
    variants: [
      { name: 'Men Singles', fee: '₹99' },
      { name: 'Women Singles', fee: '₹99' },
      { name: 'Open Doubles', fee: '₹149' }
    ]
  },
  {
    id: 'chess',
    title: 'Chess',
    image: '/uploads/chess.jpeg',
    tagline: 'Grandmaster tactics & mental battle',
    fee: '₹99 – ₹249',
    teamSize: 'Individual',
    maxPlayers: 1,
    type: 'Solo',
    date: '11 October 2026',
    dateDisplay: '11 Oct 2026',
    venue: 'SPIT Central Library Hall',
    description: 'Rapid & Blitz chess tournament with FIDE time controls. Test your tactical mastery and strategic depth.',
    rules: [
      'FIDE Swiss League format.',
      'Blitz & Rapid categories available.',
      'Electronic clocks & boards supplied for top tables.'
    ],
    prizes: '₹2,500',
    popular: true,
    formLink: 'https://forms.gle/DS6Qq2fa7t23NXxUA',
    variants: [
      { name: 'Blitz', fee: '₹99' },
      { name: 'Rapid', fee: '₹199' },
      { name: 'Both (Blitz + Rapid)', fee: '₹249' }
    ]
  },
  {
    id: 'esports',
    title: 'Esports',
    image: '/uploads/Esports.jpg',
    tagline: 'Dominate the virtual arena',
    fee: '₹59 – ₹199',
    teamSize: 'Solo / Squad',
    maxPlayers: 4,
    type: 'Gaming',
    date: '12-16 October 2026',
    dateDisplay: '12-16 Oct 2026',
    venue: 'SPIT E-Sports Arena',
    description: 'Competitive gaming showdown featuring Free Fire, BGMI, FIFA, and Clash Royale.',
    rules: [
      'Fair play & anti-cheat monitoring enforced.',
      'Custom room credentials provided 15 mins prior to match.',
      'Players must bring their own mobile devices / controllers.'
    ],
    prizes: '₹5,000',
    popular: true,
    formLink: 'https://forms.gle/j8dapzvr9zgbt5zt9',
    variants: [
      { name: 'FF (Free Fire)', fee: '₹199' },
      { name: 'BGMI', fee: '₹199' },
      { name: 'FC Mobile', fee: '₹75' },
      { name: 'FC26 PS5', fee: '₹149' },
      { name: 'CR (Clash Royale)', fee: '₹59' }
    ]
  },
  {
    id: 'dodgeball',
    title: 'Dodgeball',
    image: '/uploads/dodgeball.jpg',
    tagline: 'Dodge, Duck, Dip, Dive and Dodge!',
    fee: '₹499 / Team',
    teamSize: '8+ 1 optional girls',
    maxPlayers: 6,
    type: 'Team',
    date: '22 October 2026',
    dateDisplay: '22 Oct 2026',
    venue: 'SPIT Turf Arena',
    description: 'Adrenaline-pumping dodgeball frenzy. Quick reflexes, sharp throws, and ultimate squad teamwork.',
    rules: [
      '6 players per team on court at opening rush.',
      'Headshots are strictly prohibited and result in immediate out.',
      'Catching an opponent throw brings eliminated player back.'
    ],
    prizes: '₹5,000',
    popular: false,
    formLink: 'https://forms.gle/TrCgo9zt4pCSjmmr6',
    variants: [
      { name: 'Dodgeball Team', fee: '₹499' }
    ]
  },
  {
    id: 'cricket',
    title: 'Turf Cricket',
    image: '/uploads/cricket.jpg',
    tagline: 'Smash boundaries under the floodlights',
    fee: '₹999 / Team',
    teamSize: '7 + 2 Subs, 1 girl minimum',
    maxPlayers: 8,
    type: 'Team',
    date: '24 October 2026',
    dateDisplay: '24 Oct 2026',
    venue: 'SPIT Quadrangle Arena',
    description: 'Fast-paced turf cricket tournament with intense overs, direct hits, and exciting wall rules.',
    rules: [
      '6 overs per innings.',
      'One over powerplay with double runs.',
      'Underarm bowling only; direct hit off wall catches are out.',
      'Team must bring uniform kit.'
    ],
    prizes: '₹13,000',
    popular: true,
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeBtxFCyTrWqcQmo1SrbrAYWfircCfHqL_oHVOwtu4_3XUGtQ/viewform?usp=sharing&ouid=106893775628648167792',
    variants: [
      { name: 'Turf Cricket Squad', fee: '₹999' }
    ]
  },
  {
    id: 'badminton',
    title: 'Badminton',
    image: '/uploads/badminton.jpg',
    tagline: 'Smash with agility and surgical precision',
    fee: '₹199 – ₹349',
    teamSize: '1 or 2 Players',
    maxPlayers: 2,
    type: 'Solo/Doubles',
    date: '25 October 2026',
    dateDisplay: '25 Oct 2026',
    venue: 'SPIT Indoor Sports Complex',
    description: 'Men\'s & Women\'s Singles and Doubles tournament on professional wooden court.',
    rules: [
      'Best of 3 sets of 21 points each.',
      'Standard BWF tournament rules apply.',
      'Non-marking shoes are strictly mandatory.',
      'Mavis 350 shuttles provided.'
    ],
    prizes: '₹15,000',
    popular: true,
    formLink: 'https://forms.gle/FS4AAQsDSC2Cx2yk8',
    variants: [
      { name: 'Men Singles', fee: '₹199' },
      { name: 'Women Singles', fee: '₹199' },
      { name: 'Men Doubles', fee: '₹349' },
      { name: 'Mixed Doubles', fee: '₹349' },
      { name: 'Women Doubles', fee: '₹349' }
    ]
  },
  {
    id: 'carrom',
    title: 'Carrom',
    image: '/uploads/carrom.jpg',
    tagline: 'Pocket the queen, rule the board',
    fee: '₹79 – ₹129',
    teamSize: '1 or 2 Players',
    maxPlayers: 2,
    type: 'Solo/Doubles',
    date: '27 October 2026',
    dateDisplay: '27 Oct 2026',
    venue: 'SPIT Indoor Lounge',
    description: 'Classic carrom tournament with smooth boards, precise striker shots, and queen cover battles.',
    rules: [
      'Standard AICF rules apply (29 Points or 3 Boards match).',
      'Queen carries 3 points penalty if not covered.',
      'Standard Synco powder & approved strikers used.'
    ],
    prizes: '₹2,500',
    popular: false,
    formLink: 'https://forms.gle/6Zs76DTvnM5DtuFc8',
    variants: [
      { name: 'Singles', fee: '₹79' },
      { name: 'Open Doubles', fee: '₹129' }
    ]
  }
];

export const eventDetails = {
  name: 'Agility Cup 2026',
  organizer: 'Sports Committee SPIT',
  college: 'Sardar Patel Institute of Technology, Mumbai',
  dates: 'October 6 - 25, 2026',
  location: 'Bhavan\'s Campus, Munshi Nagar, Andheri (W), Mumbai',
  contactEmail: 'sports@spit.ac.in',
  contactPhone: '+91 8452828305',
  upiId: 'spitsports@upi'
};
