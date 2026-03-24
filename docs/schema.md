### 1. Collection: `Characters`
| Pole          | Typ          | Opis                              | Przykład                       |
|:--------------|:-------------|:----------------------------------|:-------------------------------|
| `id`          | **ObjectId** | Unikalna Id Muminka               | `whatever ObjectId gives back` |
| `name`        | **String**   | Nazwa Muminka                     | `"Chuj"`                       |
| `description` | **String**   | Opis Muminka cokolwiek to oznacza | `"Chujowy"`                    |
| `gatunek`     | **String**   | Gatunek Muminka                   | `"chujek"`                     |
| `status`      | **Bool**     | czy postać śpi snem zimowym       | `True`                         |

### 2. Collection: `Artefacts`
| Pole          | Typ          | Opis                                          | Przykład                       |
|:--------------|:-------------|:----------------------------------------------|:-------------------------------|
| `name`        | **String**   | Nazwa Artefaktu                               | `"chujo-staff"`                |
| `description` | **String**   | Opis Artefaktu cokolwiek to oznacza           | `"chujowo to wygląda"`         |
| `property`    | **String**   | Co dany Artefakt odpierdala                   | `"idk phallic object funny"`   |
| `owner`       | **ObjectId** | jeden właściciel Artefaktu (insert LoTR meme) | `whatever ObjectId gives back` |

