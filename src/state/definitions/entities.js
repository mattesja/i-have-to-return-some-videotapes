const entities = {
  // Special
  SA: { type: 'tape' },
  SB: { type: 'door' },
  // Powerups
  PA: { type: 'sunglasses' },
  PB: { type: 'silverware' },
  PC: { type: 'speedboat' },
  PD: { type: 'boots' },
  PE: { type: 'hammer' },
  // Bounds
  BA: { type: 'treeA' },
  BB: { type: 'treeB' },
  BC: { type: 'building' },
  BD: { type: 'rabbit' },
  BE: { type: 'chicken' },
  BF: { type: 'fishA' },
  BG: { type: 'fishB' },
  BH: { type: 'turtle' },
  BI: { type: 'camel' },
  BJ: { type: 'cloud' },
  BK: { type: 'creepsun' },
  // Killers without items
  DA: { type: 'sun' },
  DB: { type: 'corn' },
  DC: { type: 'wave' },
  DD: { type: 'fire' },
  DE: { type: 'snowman' },
  // Killers always
  KA: { type: 'bee' },
  KB: { type: 'gator' },
  KC: { type: 'snake' },
  KD: { type: 'carA' },
  KE: { type: 'carB' },
  KF: { type: 'taxi' },
  KG: { type: 'firetruck' },
  KH: { type: 'police' },
  KI: { type: 'ambulance' },
};

export function createEntity(shortType) {
  return (
    (shortType in entities) ?
    { ...entities[shortType] } :
    null
  );
};
