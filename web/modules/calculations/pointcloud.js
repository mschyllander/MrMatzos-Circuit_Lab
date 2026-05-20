export const POINTCLOUD_FUNCTIONS = {
  polar2d: {
    title: '2D polar → Cartesian',
    formula: 'x = r × cos(θ),  y = r × sin(θ)',
    explain: 'Omvandlar 2D-polärdata, alltså avstånd + vinkel, till vanliga X/Y-koordinater.',
    inputs: [
      { key: 'r', label: 'Distance r', unit: 'm', default: 5 },
      { key: 'thetaDeg', label: 'Angle θ', unit: 'deg', default: 35 }
    ],
    resultLabel: 'Cartesian point',
    resultUnit: '',
    calculate: ({ r, thetaDeg }) => {
      const a = thetaDeg * Math.PI / 180;
      return { x: r * Math.cos(a), y: r * Math.sin(a) };
    },
    visual: 'point2d'
  },

  spherical3d: {
    title: 'Radar/LiDAR spherical → Cartesian XYZ',
    formula:
      'Input spherical coordinates:\n' +
      'r = range [m]\n' +
      'az = azimuth [deg]\n' +
      'el = elevation [deg]\n\n' +
      'Conversion to Cartesian XYZ:\n' +
      'x = r · cos(el) · cos(az)\n' +
      'y = r · cos(el) · sin(az)\n' +
      'z = r · sin(el)',
    explain:
      'Radar och LiDAR mäter ofta sfäriska koordinater: range, azimuth och elevation. ' +
      'För att rita detta i 3D konverteras punkterna först till kartesiska X/Y/Z-koordinater.',
    inputs: [
      { key: 'r', label: 'Range r', unit: 'm', default: 8 },
      { key: 'azimuthDeg', label: 'Azimuth az', unit: 'deg', default: 35 },
      { key: 'elevationDeg', label: 'Elevation el', unit: 'deg', default: 12 }
    ],
    resultLabel: 'Cartesian XYZ point',
    resultUnit: '',
    calculate: ({ r, azimuthDeg, elevationDeg }) => {
      const az = azimuthDeg * Math.PI / 180;
      const el = elevationDeg * Math.PI / 180;
      return {
        x: r * Math.cos(el) * Math.cos(az),
        y: r * Math.cos(el) * Math.sin(az),
        z: r * Math.sin(el)
      };
    },
    visual: 'point3d'
  }
};
