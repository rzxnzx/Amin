import { Inject, Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { Services } from 'src/utils/services';
import { Prompt } from './gpt.dto';

@Injectable()
export class OpenAiService {
    constructor(@Inject(Services.OpenAI) private readonly openAI: OpenAI) {}

    public async createGpt3Prompt(metadata: Prompt) {
        return await this.openAI.completions.create({
            model: 'gpt-4-0125-preview',
            prompt: metadata.prompt
        });
    }
}
