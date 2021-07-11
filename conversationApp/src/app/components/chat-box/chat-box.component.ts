import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
})
export class ChatBoxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

  public friends = [
    {
      userId: '1',
      isFavorite: false,
      isGroup: false,
      isSeen: true,
      time: '1m',
      name: 'Terrance Orta',
      message: 'Hi this is test message can we talk to the mamm ahdajh',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/men/27.jpg',
    },
    {
      userId: '2',
      isGroup: false,
      isSeen: true,
      time: '2m',
      name: 'Richard Mahoney',
      message: 'Hi this is test message can we talk akjbdkankjndakjn',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/men/1.jpg',
    },
    {
      isGroup: true,
      isSeen: true,
      time: '3m',
      name: ['drew', ' lapos', ' jabnu'],
      message: 'Hi this is test message can we talk akjbdkankjndakjn',
      photo: [
        {
          photo:
            'https://www.infragistics.com/angular-demos/assets/images/women/50.jpg',
        },
        {
          photo:
            'https://www.infragistics.com/angular-demos/assets/images/men/1.jpg',
        },
        {
          photo:
            'https://www.infragistics.com/angular-demos/assets/images/men/1.jpg',
        }
      ]
    },
    {
      isGroup: false,
      isSeen: true,
      userId: '4',
      isFavorite: false,
      groupId: '1',
      time: '5m',
      name: 'Lisa Landers',
      message: 'text is for testing purpose is it fine for',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/women/3.jpg',
    },
    {
      isGroup: false,
      isSeen: false,
      userId: '5',
      isFavorite: true,
      groupId: '1',
      time: '10m',
      name: 'Dorothy H. Spencer',
      message: 'text is for testing purpose is it fine for',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/women/67.jpg',
    },
    {
      isGroup: false,
      isSeen: false,
      userId: '6',
      isFavorite: false,
      time: '55m',
      name: 'Terrance Orta',
      message: 'text is for testing purpose is it fine for',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/men/27.jpg',
    },
    {
      isGroup: true,
      isSeen: false,
      time: '1h',
      name: ['leps', ' jhapon'],
      message: 'Hi this is test message can we talk akjbdkankjndakjn',
      photo: [
        {
          photo:
            'https://www.infragistics.com/angular-demos/assets/images/women/50.jpg',
        },
        {
          photo:
            'https://www.infragistics.com/angular-demos/assets/images/men/1.jpg',
        }
      ],
    },
    {
      userId: '7',
      isSeen: true,
      isFavorite: true,
      time: '1d',
      name: 'Richard Mahoney',
      message: 'text is for testing purpose is it fine for',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/men/1.jpg',
    },
    {
      isGroup: false,
      isSeen: false,
      userId: '8',
      time: '2d',
      isFavorite: false,
      name: 'Donna Price',
      message: 'text is for testing purpose is it fine for',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/women/50.jpg',
    },
    {
      isGroup: false,
      isSeen: false,
      userId: '9',
      time: '1w',
      isFavorite: false,
      name: 'Lisa Landers',
      message: 'text is for testing purpose is it fine for',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/women/3.jpg',
    },
    {
      isGroup: false,
      isSeen: true,
      userId: '10',
      time: '1w',
      isFavorite: true,
      name: 'Dorothy H. Spencer',
      message: 'text is for testing purpose is it fine for',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/women/67.jpg',
    },
    {
      isGroup: false,
      isSeen: true,
      userId: '11',
      time: '2w',
      isFavorite: false,
      name: 'Terrance Orta',
      message: 'text is for testing purpose is it fine for',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/men/27.jpg',
    },
    {
      isGroup: false,
      isSeen: true,
      userId: '12',
      time: '2w',
      isFavorite: true,
      name: 'Richard Mahoney',
      message: 'text is for testing purpose is it fine for',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/men/1.jpg',
    },
    {
      isGroup: false,
      isSeen: true,
      userId: '13',
      time: '3w',
      isFavorite: false,
      name: 'Donna Price',
      message: 'text is for testing purpose is it fine for',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/women/50.jpg',
    },
    {
      userId: '14',
      isFavorite: false,
      isSeen: true,
      time: '1mn',
      name: 'Lisa Landers',
      message: 'text is for testing purpose is it fine for',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/women/3.jpg',
    },
    {
      isGroup: false,
      isSeen: true,
      userId: '15',
      time: '5mn',
      isFavorite: true,
      name: 'Dorothy H. Spencer',
      message: 'text is for testing purpose is it fine for',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/women/67.jpg',
    },
  ];
}
