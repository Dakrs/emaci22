const translate2to3 = (code) => {
  var lib = {
    'ALB': 'AL',
    'ARM': 'AM',
    'AND': 'AD',
    'AUT': 'AT',
    'AZE': 'AZ',
    'BLR': 'BY',
    'BEL': 'BE',
    'BIH': 'BA',
    'BUL': 'BG',
    'HRV': 'HR',
    'CYP': 'CY',
    'CZE': 'CZ',
    'DNK': 'DK',
    'EST': 'EE',
    'FIN': 'FI',
    'FRA': 'FR',
    'GEO': 'GE',
    'DEU': 'DE',
    'GRC': 'GR',
    'HUN': 'HU',
    'ISL': 'IS',
    'IRL': 'IE',
    'ITA': 'IT',
    'KAZ': 'KZ',
    'LVA': 'LV',
    'LIE': 'LI',
    'LTU': 'LT',
    'LUX': 'LU',
    'MLT': 'MT',
    'MDA': 'MD',
    'MCO': 'MC',
    'MNE': 'ME',
    'NLD': 'NL',
    'MKD': 'MK',
    'NOR': 'NO',
    'POL': 'PL',
    'POR': 'PT',
    'ROU': 'RO',
    'RUS': 'RU',
    'SMR': 'SM',
    'SRB': 'RS',
    'SVK': 'SK',
    'SVN': 'SI',
    'ESP': 'ES',
    'SWE': 'SE',
    'CHE': 'CH',
    'TUR': 'TR',
    'UKR': 'UA',
    'GBR': 'GB',
  }

  if (code in lib){
    return lib[code]
  }

  return 'EU';
}

export {
  translate2to3
}
