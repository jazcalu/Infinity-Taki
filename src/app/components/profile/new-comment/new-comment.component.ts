import { Component,  EventEmitter } from '@angular/core';
import { UploadFile, UploadInput, UploadOutput, humanizeBytes } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  
})
export class NewCommentComponent  {

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  constructor() {
      this.files = [];
      this.uploadInput = new EventEmitter<UploadInput>();
      this.humanizeBytes = humanizeBytes;
  }

  showFiles() {
      let files = '';
      for (let i = 0; i < this.files.length; i ++) {
        files += this.files[i].name;
         if (!(this.files.length - 1 === i)) {
           files += ',';
        }
      }
      return files;
   }

  startUpload(): void {
      const event: UploadInput = {
      type: 'uploadAll',
      url: 'your-path-to-backend-endpoint',
      method: 'POST',
      data: { foo: 'bar' },
      };
      this.files = [];
      this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
      this.uploadInput.emit({ type: 'cancel', id: id });
  }

  onUploadOutput(output: UploadOutput | any): void {

      if (output.type === 'allAddedToQueue') {
      } else if (output.type === 'addedToQueue') {
        this.files.push(output.file); // add file to array when added
      } else if (output.type === 'uploading') {
        // update current data in files array for uploading file
        const index = this.files.findIndex(file => file.id === output.file.id);
        this.files[index] = output.file;
      } else if (output.type === 'removed') {
        // remove file from array when removed
        this.files = this.files.filter((file: UploadFile) => file !== output.file);
      } else if (output.type === 'dragOver') {
        this.dragOver = true;
      } else if (output.type === 'dragOut') {
      } else if (output.type === 'drop') {
        this.dragOver = false;
      }
      this.showFiles();
  }

}
