import { ApiProperty, } from "@nestjs/swagger";


export class CreateProductDto {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly price: number;
    @ApiProperty()
    readonly imageUrl: string;
    @ApiProperty()
    readonly created_date: Date;
}
