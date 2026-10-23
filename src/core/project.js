import { uid } from './utils.js';

export function blankProject() {
  const pageId = uid();
  return {
    name: 'My Roadmap',
    settings: {
      displayMode: 'light',
      displayFields: [],
      nodeContentCollapsed: false,
      nodeStyle: 'presentation',
    },
    activePageId: pageId,
    pages: [{
      id: pageId,
      name: 'Overview',
      nodes: [],
      edges: [],
      lanes: [],
      timeline: [],
      showRelationships: true,
      showRelationshipLabels: true,
      roadConfig: {
        laneField: 'Category',
        timeField: 'Year',
        sortField: '',
        autoSync: true,
        laneHeight: 190,
        timeCellWidth: 300,
      },
    }],
    snapshots: [],
    globalStyles: { radius: 12, padding: 12, edge: 2 },
    version: 2,
  };
}
