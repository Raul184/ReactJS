import React from 'react';
//comps.
import PlayListHeader from '../PlaylistHeader';
//containers
import PlayListItems from './PlaylistItems';
import NightMode from '../NightMode';

export default function Playlist() {
  return (
    <>
      <NightMode />
      <PlayListHeader />
      <PlayListItems />
    </>
  )
}
