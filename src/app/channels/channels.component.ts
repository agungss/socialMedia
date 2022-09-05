import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';

import { Channel } from '../models/Channel';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  channels: Channel[] | undefined;

  constructor(private channelService: ChannelService) { }

  ngOnInit(): void {
    this.channelService.getChannels().subscribe(channels => {
      this.channels = channels;
    });
  }

}
