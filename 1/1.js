"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albumList = [
  {title: "album1", artist: "mike", year: 2000},
  {title: "album2", artist: "sam", year: 2002},
  {title: "album3", artist: "duke", year: 1978},
]

const musicLibrary = {
  albumList,
  *[Symbol.iterator](){
    for (let album of albumList){
      yield album;
    }
  }
}

for (let album of musicLibrary){
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}