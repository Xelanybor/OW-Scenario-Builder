export function getTeamColor(teamID: number): React.CSSProperties['color'] {
  switch (teamID) {
    case 0:
      return '#22bbe0'; // Team 1 colour
    case 1:
      return '#ff3737'; // Team 2 colour
    default:
        return '#ff3737'; // No team
  }
}