import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import DG from '2gis-maps'
import LocationIcon from '../assets/icons/location.svg'
import CompanyIcon from '../assets/icons/map-logo.svg'

const Map = () => {
   useEffect(() => {
      const map = DG.map('map-container', {
         center: [42.943842, 74.584486],
         zoom: 12,
      })

      const customIcon = DG.icon({
         iconUrl: LocationIcon,
         iconAnchor: [15, 40],
      })

      const locationMarker = DG.marker([42.943842, 74.584486], {
         icon: customIcon,
      })

      locationMarker.on('click', () => {
         window.open(
            'https://2gis.kg/bishkek/firm/70000001040006417?m=74.584487%2C42.943842%2F16',
            '_blank'
         )
      })

      const companyIcon = DG.icon({
         iconUrl: CompanyIcon,
         iconAnchor: [32, 5],
      })

      const companyMarker = DG.marker([42.943842, 74.584486], {
         icon: companyIcon,
      })

      locationMarker.addTo(map)
      companyMarker.addTo(map)

      return () => map && map.remove()
   }, [])

   return <StyledMapContainer id="map-container" />
}

export default Map

const StyledMapContainer = styled('div')(() => ({
   width: '100%',
   height: '400px',
}))
