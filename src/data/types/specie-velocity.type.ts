export type SpecieVelocityValue = {
    label: 'walking' | 'swimming' | 'flying' | 'climbing' | 'digging' | 'running',
    value: number;
}
export type SpecieVelocity = {
    values: SpecieVelocityValue[];
}