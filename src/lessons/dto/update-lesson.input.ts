import { CreateLessonInput } from './create-lesson.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateLessonInput extends PartialType(CreateLessonInput) {
  id: number;
}
